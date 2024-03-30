const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

//Configurando o template engine.
app.set("view engine", "ejs");//definindo o template engine -> EJS
app.use(express.static('public'));//definindo a pasta onde será salvo os arquivos estáticos

//Chamando o body-Parser.
app.use(bodyParser.urlencoded({ extended: false }));
//habilitando o JSON
app.use(bodyParser.json());


//Rotas
app.get("/", (req, res) => {
    
    res.render("index");
});

app.get("/perguntas", (req, res) => {
    
    res.render("perguntas");
});

app.post("/salvarPergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send(`Opa, mandaram uma pergunta: Titulo ${titulo} e Descrição: ${descricao}`);
});

//Chamando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em:  http://localhost:${port}`);
});

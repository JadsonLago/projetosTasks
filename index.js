const express = require("express");
const app = express();
const port = 3000;

//Configurando o template engine.
app.set("view engine", "ejs");//definindo o template engine -> EJS
app.use(express.static('public'));//definindo a pasta onde será salvo os arquivos estáticos

//Rotas
app.get("/", (req, res) => {
    
    res.render("index");
});

app.get("/perguntas", (req, res) => {
    
    res.render("perguntas");
});

//Chamando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em:  http://localhost:${port}`);
});

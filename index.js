const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const connection = require("./database/database"); //Importando a conexão ao banco de dados
const Pergunta = require("./database/Pergunta"); //Importando o Model "Pergunta"
//Testando conexão ao banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso");
    })
    .catch((erro) => {
        console.log(erro);
    });

//Configurando o template engine.
app.set("view engine", "ejs"); //definindo o template engine -> EJS
app.use(express.static("public")); //definindo a pasta onde será salvo os arquivos estáticos

//Chamando o body-Parser.
app.use(bodyParser.urlencoded({ extended: false }));
//Hhabilitando o JSON no bodyParser
app.use(bodyParser.json());

//Rotas
app.get("/", (req, res) => {

    Pergunta.findAll({raw:true, order:[['ID','DESC']]})
    .then((perguntas)=>{
       
        res.render("index", {
            perguntas:perguntas
        }
        );
    });
    /*Para pesquisar todas as perguntas:
    1º Utiliza-se o método "findAll()" atribuindo o parametro "raw:true" para exibir apenas os dados
    inseridos pelo usuário, ocultando os dados adicionais gerados pelo db e "order:[['ID','DESC']]"" para 
    ordenar a consulta, sendo "ID" o campo de ordenação e "DESC" para ordenação decrescente, sendo ascendente, 
    utilizaria-se "ASC".
    2º É atribuido a função ".then()" para tentar a execução da função "res.render()", para renderizar a página e 
    através do JSON, encapsular os dados pesquisados no parametro "perguntas" e disponibilizar para o index
    através do JSON {perguntas:perguntas}.
     */
    
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where:{id:id}
    }).then((pergunta)=>{
        if (pergunta != undefined) {

            res.render('pergunta', {
                perguntas:pergunta
            })
            
        } else {
            res.redirect('/')
        }

    })
    
});

app.get("/perguntas", (req, res) => {
    res.render("perguntas");
});

app.get("/respostas", (req, res) => {
    res.render("respostas");
});

app.post("/salvarPergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        title:titulo,
        description:descricao
    }).then(() => {
        res.redirect('/');
    })
    .catch((erro) => {
        console.log(erro);
    });
});

//Chamando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em:  http://localhost:${port}`);
});

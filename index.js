const express = require("express");
const app = express();
const port = 3000;

//Especificando o EJS como template engine.
app.set("view engine", "ejs");

//Rotas
app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "JTX Development",
    inscritos: 8040,
    msg: exibirMsg,
  });
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/perfil", (req, res) => {
  res.render("principal/perfil");
});

//Chamando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em:  http://localhost:${port}`);
});

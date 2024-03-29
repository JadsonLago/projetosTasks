const express = require("express");
const app = express();
const port = 3000;

//Especificando o EJS como template engine.
app.set("view engine", "ejs");

//Rotas
app.get("/:nome", (req, res) => {

  let name = req.params.nome
  
  res.render("index",{
    name:name,
    idade:idade
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

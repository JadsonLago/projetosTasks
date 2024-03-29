const express = require("express");
const app = express();
const port = 3000;

//Config

app.set("view engine", "ejs");

//Rotas
app.get("/", (req, res) => {
  res.render("index");
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

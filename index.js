const express = require("express");
const app = express();
const db = require("./db/connection");
const Sequelize = require("sequelize");
const PORT = 8080;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta ${PORT}`);
});

db.authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

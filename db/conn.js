const { Sequelize } = require("sequelize");
require("dotenv").config();
const DB_DIALECT = process.env.DB_DIALECT;
const DB_STORAGE = process.env.DB_STORAGE;

const sequelize = new Sequelize({
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão bem sucedida.");
  })
  .catch((error) => {
    console.error("Erro ao conectar:", error);
  });

module.exports = sequelize;

const { Sequelize } = require("sequelize");

// Criando uma instância do Sequelize
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/app.db",
});

// Testando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão bem sucedida.");
  })
  .catch((error) => {
    console.error("Erro ao conectar:", error);
  });

// Exportando a instância do Sequelize para ser utilizada em outros arquivos
module.exports = sequelize;

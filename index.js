const express = require("express");
const app = express();
const conn = require("./db/conn");
const Sequelize = require("sequelize");
const Pet = require("./models/pets");
const Tutor = require("./models/tutors");
const PORT = 8080;

// rota home
app.get("/", function (req, res) {
  res.send("Home");
});

// tutors routes
app.use("/tutors", require("./routes/tutors"));

// tutors routes
app.use("/pets", require("./routes/pets"));

conn
  .sync()
  .then(() => {
    app.listen(PORT, function () {
      console.log(`O Express está rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

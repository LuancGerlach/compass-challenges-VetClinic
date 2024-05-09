const express = require("express");
const app = express();
const conn = require("./db/conn");
const PORT = process.env.PORT;
app.use(express.json());

// tutors routes
app.use("/tutors", require("./routes/tutors"));

// tutors routes
app.use("/pets", require("./routes/pets"));

conn
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

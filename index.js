const express = require("express");
const app = express();
const conn = require("./db/conn");
const PORT = process.env.PORT;
app.use(express.json());

app.use("/tutors", require("./routes/tutors"));
app.use("/pets", require("./routes/pets"));

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

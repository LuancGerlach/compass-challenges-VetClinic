const express = require("express");
const app = express();
const conn = require("./db/conn");
const PORT = process.env.PORT;
const tutorsRoutes = require("./routes/tutors.route");
const petsRoutes = require("./routes/pets.route");

app.use(express.json());

app.use("/tutors", tutorsRoutes);
app.use("/pets", petsRoutes);

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

// Função para criar um novo tutor no banco de dados
router.post("/add", async (req, res) => {
  try {
    const { name, phone, email, date_of_birth, zip_code } = req.body;

    // Cria um novo Tutor no banco de dados
    const newTutor = await Tutor.create({
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
    });

    // Retorna o novo tutor criado como resposta
    res.status(201).json(newTutor);
  } catch (err) {
    console.error("Erro ao criar novo tutor:", err);
    res.status(500).json({ error: "Erro ao criar novo tutor" });
  }
});

module.exports = router;

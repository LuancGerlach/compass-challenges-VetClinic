const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.js");
const Tutor = require("../models/Tutor.js");

// Rota para adicionar um novo pet associado a um tutor específico
router.post("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  const petData = req.body;

  try {
    const tutorExists = await Tutor.findByPk(tutorId);
    if (!tutorExists) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    // Adicione o tutorId ao objeto de dados do pet
    petData.TutorId = tutorId;

    const newPet = await Pet.create(petData);

    res.status(201).json(newPet);
  } catch (error) {
    console.error("Error adding pet:", error);
    res.status(500).json({ error: "Error adding pet" });
  }
});

module.exports = router;

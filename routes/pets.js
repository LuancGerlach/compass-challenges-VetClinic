const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.js");
const Tutor = require("../models/Tutor.js");

// Post pet passando o id do tutor vinculado
router.post("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  const petData = req.body;

  try {
    const tutorExists = await Tutor.findByPk(tutorId);
    if (!tutorExists) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    petData.TutorId = tutorId;

    const newPet = await Pet.create(petData);

    res.status(201).json(newPet);
  } catch (error) {
    console.error("Error adding pet:", error);
    res.status(500).json({ error: "Error adding pet" });
  }
});

//get para trazer todos pets
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll();

    if (!pets || pets.length === 0) {
      return res.status(404).json({ error: "No pets found" });
    }

    res.status(200).json(pets);
  } catch (error) {
    console.error("Error fetching pets:", error);
    res.status(500).json({ error: "Error fetching pets" });
  }
});

// get para trazer pets pelo id
router.get("/:petId", async (req, res) => {
  const petId = req.params.petId;

  try {
    const pet = await Pet.findByPk(petId);

    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }

    res.status(200).json(pet);
  } catch (error) {
    console.error("Error fetching pet:", error);
    res.status(500).json({ error: "Error fetching pet" });
  }
});

module.exports = router;

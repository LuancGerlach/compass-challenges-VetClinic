const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet.js");
const Tutor = require("../models/Tutor.js");

// Função para lidar com erros
const handleError = (res, error, message) => {
  console.error(message, error);
  res.status(500).json({ error: message });
};

// Adicionar pet ao tutor
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
    handleError(res, error, "Error adding pet:");
  }
});

// Buscar todos os pets
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.findAll();
    if (pets.length === 0) {
      return res.status(404).json({ error: "No pets found" });
    }
    res.status(200).json(pets);
  } catch (error) {
    handleError(res, error, "Error fetching pets:");
  }
});

// Buscar pet por ID
router.get("/:petId", async (req, res) => {
  const petId = req.params.petId;
  try {
    const pet = await Pet.findByPk(petId);
    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }
    res.status(200).json(pet);
  } catch (error) {
    handleError(res, error, "Error fetching pet:");
  }
});

// Atualizar pet por ID
router.put("/:petId", async (req, res) => {
  const petId = req.params.petId;
  try {
    const petToUpdate = await Pet.findByPk(petId);
    if (!petToUpdate) {
      return res.status(404).json({ error: "Pet not found" });
    }
    await petToUpdate.update(req.body);
    res.status(200).json(petToUpdate);
  } catch (error) {
    handleError(res, error, "Error updating pet:");
  }
});

// Deletar pet por ID
router.delete("/:petId", async (req, res) => {
  const petId = req.params.petId;
  try {
    const petToDelete = await Pet.findByPk(petId);
    if (!petToDelete) {
      return res.status(404).json({ error: "Pet not found" });
    }
    await petToDelete.destroy();
    res.status(200).json({ message: "Pet deleted successfully" });
  } catch (error) {
    handleError(res, error, "Error deleting pet:");
  }
});

module.exports = router;

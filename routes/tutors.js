const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

const handleError = (res, error, message) => {
  console.error(message, error);
  res.status(500).json({ error: message });
};

router.post("/add", async (req, res) => {
  try {
    const newTutor = await Tutor.create(req.body);
    res.status(201).json(newTutor);
  } catch (error) {
    handleError(res, error, "Erro ao criar novo tutor:");
  }
});

router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.findAll({ include: Pet });
    if (tutors.length === 0) {
      return res.status(404).json({ error: "No tutors found" });
    }
    res.status(200).json(tutors);
  } catch (error) {
    handleError(res, error, "Error fetching tutors:");
  }
});

router.get("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    const tutor = await Tutor.findByPk(tutorId, { include: Pet });
    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }
    res.status(200).json(tutor);
  } catch (error) {
    handleError(res, error, "Error fetching tutor:");
  }
});

router.put("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    const tutorToUpdate = await Tutor.findByPk(tutorId);
    if (!tutorToUpdate) {
      return res.status(404).json({ error: "Tutor not found" });
    }
    await tutorToUpdate.update(req.body);
    res.status(200).json(tutorToUpdate);
  } catch (error) {
    handleError(res, error, "Error updating tutor:");
  }
});

router.delete("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  try {
    const tutorToDelete = await Tutor.findByPk(tutorId);
    if (!tutorToDelete) {
      return res.status(404).json({ error: "Tutor not found" });
    }
    await tutorToDelete.destroy();
    res.status(200).json({ message: "Tutor deleted successfully" });
  } catch (error) {
    handleError(res, error, "Error deleting tutor:");
  }
});

module.exports = router;

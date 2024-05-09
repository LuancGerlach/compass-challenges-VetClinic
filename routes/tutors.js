const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

router.post("/add", async (req, res) => {
  try {
    const { name, phone, email, date_of_birth, zip_code } = req.body;

    const newTutor = await Tutor.create({
      name,
      phone,
      email,
      date_of_birth,
      zip_code,
    });

    res.status(201).json(newTutor);
  } catch (err) {
    console.error("Erro ao criar novo tutor:", err);
    res.status(500).json({ error: "Erro ao criar novo tutor" });
  }
});

router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.findAll({
      include: Pet,
    });

    if (!tutors || tutors.length === 0) {
      return res.status(404).json({ error: "No tutors found" });
    }

    res.status(200).json(tutors);
  } catch (error) {
    console.error("Error fetching tutors:", error);
    res.status(500).json({ error: "Error fetching tutors" });
  }
});

router.get("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;

  try {
    const tutor = await Tutor.findByPk(tutorId, {
      include: Pet,
    });

    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    res.status(200).json(tutor);
  } catch (error) {
    console.error("Error fetching tutor:", error);
    res.status(500).json({ error: "Error fetching tutor" });
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
    console.error("Error updating tutor:", error);
    res.status(500).json({ error: "Error updating tutor" });
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
    console.error("Error deleting tutor:", error);
    res.status(500).json({ error: "Error deleting tutor" });
  }
});

module.exports = router;

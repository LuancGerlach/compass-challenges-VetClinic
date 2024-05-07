const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/Pet");

// Post para adicionar um novo tutor
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

// Rota GET para listar todos os tutores e seus pets associados
router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.findAll({
      include: Pet,
    });

    const formattedResponse = tutors.map((tutor) => ({
      id: tutor.id,
      name: tutor.name,
      phone: tutor.phone,
      email: tutor.email,
      date_of_birth: tutor.date_of_birth,
      zip_code: tutor.zip_code,
      pets: tutor.Pets,
    }));

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error fetching tutors:", error);
    res.status(500).json({ error: "Error fetching tutors" });
  }
});

// get para buscar o tutor pelo id
router.get("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;

  try {
    const tutor = await Tutor.findByPk(tutorId, {
      include: Pet,
    });

    if (!tutor) {
      return res.status(404).json({ error: "Tutor not found" });
    }

    const formattedResponse = {
      id: tutor.id,
      name: tutor.name,
      phone: tutor.phone,
      email: tutor.email,
      date_of_birth: tutor.date_of_birth,
      zip_code: tutor.zip_code,
      pets: tutor.Pets,
    };

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error fetching tutor:", error);
    res.status(500).json({ error: "Error fetching tutor" });
  }
});

module.exports = router;

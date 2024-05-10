const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutor.controller");

router.post("/add", tutorController.addTutor);
router.get("/", tutorController.getAllTutors);
router.get("/:tutorId", tutorController.getTutorById);
router.put("/:tutorId", tutorController.updateTutor);
router.delete("/:tutorId", tutorController.deleteTutor);

module.exports = router;

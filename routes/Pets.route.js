const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet.controller");

router.post("/:tutorId", petController.addPet);
router.get("/", petController.getAllPets);
router.get("/:petId", petController.getPetById);
router.put("/:petId", petController.updatePet);
router.delete("/:petId", petController.deletePet);

module.exports = router;

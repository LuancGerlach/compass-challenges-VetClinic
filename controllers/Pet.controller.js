const Tutor = require("../models/Tutor.model.js");
const Pet = require("../models/Pet.model.js");
const petService = require("../services/pet.service.js");

module.exports = {
  async addPet(req, res) {
    await petService.addPet(req, res, Tutor, Pet);
  },

  async getAllPets(req, res) {
    await petService.getAllPets(req, res, Pet);
  },

  async getPetById(req, res) {
    await petService.getPetById(req, res, Pet);
  },

  async updatePet(req, res) {
    await petService.updatePet(req, res, Pet);
  },

  async deletePet(req, res) {
    await petService.deletePet(req, res, Pet);
  },
};

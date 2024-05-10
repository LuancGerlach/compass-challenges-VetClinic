const Tutor = require("../models/Tutor.model");
const Pet = require("../models/Pet.model");
const tutorService = require("../services/Tutor.service");

module.exports = {
  async addTutor(req, res) {
    await tutorService.addTutor(req, res, Tutor);
  },

  async getAllTutors(req, res) {
    await tutorService.getAllTutors(req, res, Tutor, Pet);
  },

  async getTutorById(req, res) {
    await tutorService.getTutorById(req, res, Tutor, Pet);
  },

  async updateTutor(req, res) {
    await tutorService.updateTutor(req, res, Tutor);
  },

  async deleteTutor(req, res) {
    await tutorService.deleteTutor(req, res, Tutor);
  },
};

module.exports = {
  async addTutor(req, res, Tutor) {
    try {
      const newTutor = await Tutor.create(req.body);
      res.status(201).json(newTutor);
    } catch (error) {
      console.error("Erro ao criar novo tutor:", error);
      res.status(500).json({ error: "Erro ao criar novo tutor" });
    }
  },

  async getAllTutors(req, res, Tutor, Pet) {
    try {
      const tutors = await Tutor.findAll({ include: Pet });
      if (tutors.length === 0) {
        return res.status(404).json({ error: "No tutors found" });
      }
      res.status(200).json(tutors);
    } catch (error) {
      console.error("Error fetching tutors:", error);
      res.status(500).json({ error: "Error fetching tutors" });
    }
  },

  async getTutorById(req, res, Tutor, Pet) {
    const tutorId = req.params.tutorId;
    try {
      const tutor = await Tutor.findByPk(tutorId, { include: Pet });
      if (!tutor) {
        return res.status(404).json({ error: "Tutor not found" });
      }
      res.status(200).json(tutor);
    } catch (error) {
      console.error("Error fetching tutor:", error);
      res.status(500).json({ error: "Error fetching tutor" });
    }
  },

  async updateTutor(req, res, Tutor) {
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
  },

  async deleteTutor(req, res, Tutor) {
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
  },
};

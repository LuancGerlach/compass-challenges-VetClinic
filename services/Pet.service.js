module.exports = {
  async addPet(req, res, Tutor, Pet) {
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
  },

  async getAllPets(req, res, Pet) {
    try {
      const pets = await Pet.findAll();
      if (pets.length === 0) {
        return res.status(404).json({ error: "No pets found" });
      }
      res.status(200).json(pets);
    } catch (error) {
      console.error("Error fetching pets:", error);
      res.status(500).json({ error: "Error fetching pets" });
    }
  },

  async getPetById(req, res, Pet) {
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
  },

  async updatePet(req, res, Pet) {
    const petId = req.params.petId;
    try {
      const petToUpdate = await Pet.findByPk(petId);
      if (!petToUpdate) {
        return res.status(404).json({ error: "Pet not found" });
      }
      await petToUpdate.update(req.body);
      res.status(200).json(petToUpdate);
    } catch (error) {
      console.error("Error updating pet:", error);
      res.status(500).json({ error: "Error updating pet" });
    }
  },

  async deletePet(req, res, Pet) {
    const petId = req.params.petId;
    try {
      const petToDelete = await Pet.findByPk(petId);
      if (!petToDelete) {
        return res.status(404).json({ error: "Pet not found" });
      }
      await petToDelete.destroy();
      res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
      console.error("Error deleting pet:", error);
      res.status(500).json({ error: "Error deleting pet" });
    }
  },
};

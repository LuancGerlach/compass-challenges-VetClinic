const express = require("express");
const router = express.Router();
const Tutor = require("../models/tutors");

// rota de teste
router.get("/test", (req, res) => {
  res.send("Rota tutors funcionado");
});

module.exports = router;

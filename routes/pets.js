const express = require("express");
const router = express.Router();
const Pet = require("../models/pets");

// rota de teste
router.get("/test", (req, res) => {
  res.send("Rota pets funcionando");
});

module.exports = router;

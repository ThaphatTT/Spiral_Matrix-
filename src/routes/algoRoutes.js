const express = require("express");
const router = express.Router();
const algoController = require("../controllers/algoController");

router.get("/getSpiralMatrix", algoController.getSpiralMatrix);

module.exports = router;

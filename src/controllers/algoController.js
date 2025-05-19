const algoService = require("../service/algoService");

exports.getSpiralMatrix = (req, res) => {
  const { value } = req.query;
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      return res.status(400).send("Not Array");
    }
    const resp = algoService.getSpiralMatrix(parsed);
    res.send(`${resp}`);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

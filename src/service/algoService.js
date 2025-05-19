const spiral_matrix = require("../utils/spiral_matrix.js");

exports.getSpiralMatrix = (value) => {
  const resp = spiral_matrix.spiral_matrix(value);
  return resp;
};

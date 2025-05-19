require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const algoRoutes = require("./routes/algoRoutes.js");
app.use("/api/algo", algoRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Backend with structure!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

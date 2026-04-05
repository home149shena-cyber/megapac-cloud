const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("MegaPac Cloud Backend LIVE 🚀");
});

app.listen(PORT, () => {
  console.log("MegaPac running on port " + PORT);
});
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());
const carController = require("./controllers/car.controller");

app.get("/", (req, res) => {
  try {
    res.status(200).send("welcome to simple-store.com");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
app.use('/car',carController)
module.exports = app;
const express = require("express");
const app = express();
const cors = require("cors");

const startListening = () => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  })
};

// const creditsRouter = require("express").Router();
// const debitsRouter = require("express").Router();

app.get("/credits", (req, res, next) => {
  res.status(200).json(65330);
});

app.get("/debits", (req, res, next) => {
  res.status(200).json(12500);
});

app.use(cors({
  origin: '*'
}));

const bootApp = async () => {
  await startListening();
};

bootApp();

const express = require("express");
const app = express();

const startListening = () => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
  })
};

app.get("/credits", (req, res, next) => {
  res.status(200).json(65330);
});

app.get("/debits", (req, res, next) => {
  res.status(200).json(12500);
});

const bootApp = async () => {
  await startListening();
};

bootApp();
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("requete recue !");
  next();
});

app.use((req, res, next) => {
  res.status(200);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "Votre reponse a bien ete recue !" });
  next();
});

app.use((req, res, next) => {
  console.log("La reponse a ete envoye avec succes !");
});

module.exports = app;

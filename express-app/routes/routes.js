const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Quizzes = require("../models/Quizzes");
const Answer = require("../models/Answer");
const Question = require("../models/Question");


router.get("/quizzes", (req, res) => {
  Quizzes.findAll()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.get("/question", (req, res) => {
  Question.findAll()
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.get("/answer", (req, res) => {
  Answer.findAll()
    .then((answer) => {
      res.json(answer);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});


module.exports = router;

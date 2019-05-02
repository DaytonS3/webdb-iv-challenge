const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = require("../data/db");

router.get("/", (req, res) => {
  db.getDishes()
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db.addDish(req.body)
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

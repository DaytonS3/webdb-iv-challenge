const express = require("express");
const router = express.Router();
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  db("dish")
    .then(dish => {
      console.log(dish);
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;

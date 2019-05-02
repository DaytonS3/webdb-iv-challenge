const knex = require("knex");

const dbConfig = require("../knexfile");

const db = knex(dbConfig.development);

module.exports = {
  getDishes: () => {
    return db("dish");
  },

  addDish: dishes => {
    return db("dish").insert(dishes);
  },

  getRecipe: () => {
    return db("recipe");
  },

  addRecipe: recipe => {
    return db("recipe").insert(recipe);
  }
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { name: "rowValue1" },
        { name: "rowValue2" },
        { name: "rowValue3" }
      ]);
    });
};

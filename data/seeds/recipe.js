exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        { recipe: "homemade" },
        { recipe: "mexican" },
        { recipe: "baked" }
      ]);
    });
};

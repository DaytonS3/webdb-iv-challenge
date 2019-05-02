exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        { recipe: "homemade", dish_id: 1 },
        { recipe: "mexican", dish_id_2 },
        { recipe: "baked", dish_id: 3 }
      ]);
    });
};

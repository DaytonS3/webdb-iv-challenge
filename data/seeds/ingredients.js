exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "pasta" },
        { name: "alfredo sauce" },
        { name: "tortilla" },
        { name: "beef" },
        { name: "lettuce" },
        { name: "cheese" },
        { name: "sour cream" },
        { name: "tomato sauce" }
      ]);
    });
};

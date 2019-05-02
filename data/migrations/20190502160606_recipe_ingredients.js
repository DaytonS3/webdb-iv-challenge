exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", tbl => {
    tbl.increments().unique();
    tbl.string("name").notNullable();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipe")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};

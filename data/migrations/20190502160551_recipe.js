exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe", tbl => {
    tbl.increments().unique();

    tbl.string("recipe").notNullable();

    tbl
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dish")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe");
};

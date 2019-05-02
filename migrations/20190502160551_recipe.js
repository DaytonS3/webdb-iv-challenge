exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", tbl => {
    tbl.increments().unique();

    tbl.string("recipe").notNullable();

    tbl
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dish")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe");
};

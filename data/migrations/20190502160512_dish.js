exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", tbl => {
    tbl.increments().unique();
    tbl.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExist("dish");
};

exports.up = function(knex, Promise) {
  return knex.schema.table("categories", function(table) {
    table.string("image").notNullable().defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("categories", function(table) {
    table.dropColumn("image");
  });
};

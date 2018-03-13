exports.up = function(knex, Promise) {
  return knex.schema.table("categories", function(table) {
    table.text("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("categories", function(table) {
    table.dropColumn("description");
  });
};

exports.up = function(knex, Promise) {
  return knex.schema.table("products", function(table) {
    table.float("price");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("products", function(table) {
    table.dropColumn("price");
  });
};

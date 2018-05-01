exports.up = function(knex, Promise) {
  return knex.schema.table("products", function(table) {
    table.text("colors");
    table.text("sizes");
    table.text("custom_fields");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("products", function(table) {
    table.dropColumn("colors");
    table.dropColumn("sizes");
    table.dropColumn("custom_fields");
  });
};


exports.up = function(knex, Promise) {
  return  knex.schema.table("organizations", function (table) {
    table.string("primary_color");
    table.string("secondary_color");
    table.text("header");
    table.text("footer");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("organizations", function(table) {
    table.dropColumn("primary_color");
    table.dropColumn("secondary_color");
    table.dropColumn("header");
    table.dropColumn("footer");
  });
};

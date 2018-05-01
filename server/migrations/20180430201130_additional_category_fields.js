exports.up = function(knex, Promise) {
  return  knex.schema.table("categories", function (table) {
    table.string("primary_color");
    table.string("secondary_color");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("categories", function(table) {
    table.dropColumn("primary_color");
    table.dropColumn("secondary_color");
  });
};

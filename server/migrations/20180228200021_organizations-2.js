
exports.up = function(knex, Promise) {
  return knex.schema.table("organizations", function(table) {
    table.boolean("active").notNullable().defaultTo(true);
    table.dropColumn("logo");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("organizations", function(table) {
    table.dropColumn("active");
    table.dropColumn("image");
    table.string("logo").unique().notNullable();
  });
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable("organizations", function (table) {
    table.increments("organization_id");
    table.string("organization_name").unique().notNullable();
    table.string("slug_id").unique().notNullable();
    table.string("logo").unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("organizations");
};

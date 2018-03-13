
exports.up = function(knex, Promise) {
  return  knex.schema.createTable("categories", function (table) {
    table.increments("category_id");
    table.string("category_name");
    table.integer("organization_id").notNullable().references("organization_id").inTable("organizations");
    table.boolean("active").notNullable().defaultTo(true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("categories");
};

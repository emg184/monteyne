
exports.up = function(knex, Promise) {
  return  knex.schema.createTable("products", function (table) {
    table.increments("product_id");
    table.string("product_name");
    table.integer("category_id").notNullable().references("category_id").inTable("categories");
    table.boolean("active").notNullable().defaultTo(true);
    table.text("description");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("products");
};


exports.up = function(knex, Promise) {
  return  knex.schema.createTable("images", function (table) {
    table.increments("image_id");
    table.string("image_name");
    table.integer("product_id").notNullable().references("product_id").inTable("products");
    table.boolean("active").notNullable().defaultTo(true);
    table.string("image_url");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("images");
};

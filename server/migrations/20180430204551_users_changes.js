exports.up = function(knex, Promise) {
  return  knex.schema.table("users", function (table) {
    table.dropColumn("secret_key");
    table.dropColumn("is_admin");
    table.dropColumn("name");
    table.string("email");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(table) {
    table.string("secret_key");
    table.boolean("is_admin");
    table.dropColumn("email");
    table.string("name").notNullable();
  });
};

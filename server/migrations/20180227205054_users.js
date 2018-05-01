
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('name').notNullable().unique();
    table.string('password').notNullable();
    table.string('secret_key').notNullable();
    table.boolean('is_admin').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

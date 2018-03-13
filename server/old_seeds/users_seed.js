
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert({
          name: 'ethan',
          password: 'ethangardner',
          secret_key: 'mullica-hill-new-jersey',
          is_admin: true
        });
      }).then(function () {
        return knex('users').insert({
          name: 'tom',
          password: 'tombonanni',
          secret_key: 'mullica-hill-new-jersey',
          is_admin: true
        });
      }).then(function () {
        return knex('users').insert({
          name: 'andrew',
          password: 'andrewmonteyne',
          secret_key: 'wayne-hills-new-jersey',
          is_admin: false
        });
      });
};

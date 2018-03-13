var knex = require("../knex.js");

function Users() {
  return knex("users");
}

function getAllUsers() {
  return Users().select();
}


module.exports = {
  getAllUsers: getAllUsers
};

var knex = require("../knex.js");
const bcrypt = require('bcrypt-nodejs');

function Users() {
  return knex("users");
}

function getAllUsers() {
  return Users().select();
}

function findUserById(id) {
  return Users()
          .where({ 'id': id })
}

function findUserByEmail( email ) {
  return Users()
          .where({ 'email': email })
}

function saveUser( email, password, next) {
  return findUserByEmail(email.toLowerCase())
          .then(function(x) {
            if ( !Array.isArray(x) || !x.length ) {
              bcrypt.genSalt(10, function(err, salt) {
                if (err) {return next(err);}
                bcrypt.hash(password, salt, null, function(err, hash) {
                  if (err) { return next(err); }
                  Promise.resolve(hash)
                    .then(function(x) {
                      return Users()
                              .insert({
                                'email': email.toLowerCase(),
                                'password': x,
                              })
                    })
                  })
                })
            } else {
              return "That username is unavailable"
            }
          })
}

module.exports = {
  getAllUsers: getAllUsers,
  findUserById: findUserById,
  findUserByEmail: findUserByEmail,
  saveUser: saveUser
};

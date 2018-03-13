exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert({
        product_name: "Sweatshirt",
        category_id: 1,
        active: true,
        description: "This is a sweatshirt"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "T-Shirt",
        category_id: 1,
        active: true,
        description: "get a cool t shirt"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Sweatpants",
        category_id: 1,
        active: true,
        description: "How about some cooler Sweatpants"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Shorts",
        category_id: 2,
        active: true,
        description: "Maybe even ? Cooler Shorts"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Socks",
        category_id: 2,
        active: true,
        description: "What about some Team Socks?????"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Hat",
        category_id: 2,
        active: true,
        description: "Awesome Team Hats"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Lawn Sign",
        category_id: 3,
        active: true,
        description: "Crazy Lawn Signs"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Shoes",
        category_id: 3,
        active: true,
        description: "Get your team shoes right here"
      });
    }).then(function () {
      return knex('products').insert({
        product_name: "Gloves",
        category_id: 3,
        active: true,
        description: "How about some NFL gloves"
      });
    });
};

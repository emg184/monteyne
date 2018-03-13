var knex = require("../knex.js");

function Products() {
  return knex('products');
};

function Images() {
  return knex('images');
};

function getAllProducts(category_id) {
  return Products()
          .where({
            'category_id' : category_id
          });
};

function getAllProductsImages(prod_id) {
  return Images()
          .where({
            'product_id' : prod_id
          });
};

module.exports = {
  getAllProducts: getAllProducts,
  getAllProductsImages: getAllProductsImages,
};

const queries = require("../queries/products.js");

module.exports = app => {

  app.get("/organizations/:slug_id/:category_id", function(req, res, next) {
      queries.getAllProducts(req.params.category_id)
        .then(function(result) {
              return result.map(function(obj) {
                  queries.getAllProductsImages(obj.product_id)
                    .then(function(images) {
                          obj["images"] = images;
                    })
                  })
                })
              .then(function(products) {
                res.status(200).json(products)
              })
                .catch(function(error) {
                  next(error);
                });
  });

};

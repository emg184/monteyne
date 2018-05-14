const queries = require("../queries/products.js");
const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const keys = require('../config');

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});

module.exports = app => {

  app.get("/organizations/:slug_id/categories/:category_id", function (req, res, next) {
      queries.getAllProducts(req.params.category_id)
          .then(function (result) {
              return Promise.all(result.map(function (obj) {
                  return queries.getAllProductsImages(obj.product_id)
                      .then(function (images) {
                          obj["images"] = images;
                          return obj;
                      });
              }));
          })
          .then(function (products) {
              res.status(200).json(products)
          })
          .catch(function (error) {
              next(error);
          });
  });
  app.get("/organizations/:slug_id/:category_id/:product_id", function (req, res, next) {
      queries.getProduct(req.params.product_id)
          .then(function (result)  {
              return queries.getProductImages(result[0].product_id)
                .then(function(images) {
                  result[0]["images"] = images;
                  return result
                });
          })
              .then(function (products) {
                  res.status(200).json(products)
              })
          .catch(function (error) {
              next(error);
          });
  });
  app.post("/organizations/:slug_id/:category_id", function (req, res, next) {
//add product
    queries.addProduct(req.body.name, req.params.category_id, req.body.status=true, req.body.desc, req.body.price,
req.body.color, req.body.sizes, req.body.custom_fields)
      .then(function () {
              res.status(200).json({message: "product added"})
      })
      .catch(function (error) {
          next(error);
      });
  });
  app.post("/organizations/:slug_id/:category_id/:product_id", function (req, res, next) {
//add image
    queries.addImage(req.body.name, req.params.product_id, req.body.status=true, req.body.url)
      .then(function () {
              res.status(200).json({message: "image added"})
      })
      .catch(function (error) {
          next(error);
      });
  });
  app.put("/organizations/:slug_id/:category_id/:product_id", function (req, res, next) {
//update product
    queries.updateProduct(req.params.product_id, req.body.name, req.params.category_id, req.body.status=true, req.body.desc, req.body.price,
req.body.color, req.body.sizes, req.body.custom_fields)
      .then(function () {
              res.status(200).json({message: "product updated"})
      })
      .catch(function (error) {
          next(error);
      });
  })
  app.put("/organizations/:slug_id/:category_id/:product_id/:image_id", function (req, res, next) {
//update image
    queries.updateImage(req.params.image_id, req.body.name, req.params.product_id, req.body.status=true, req.body.url)
      .then(function () {
              res.status(200).json({message: "image updated"})
      })
      .catch(function (error) {
          next(error);
      });
  })
  app.put("/organizations/:slug_id/:category_id/:product_id/activate", function (req, res, next) {
//activate product
    queries.activateProduct(req.params.product_id)
        .then(function () {
                res.status(200).json({message: "product activated"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.put("/organizations/:slug_id/:category_id/:product_id/:image_id/activate", function (req, res, next) {
//activate image
    queries.activateImage(req.params.image_id)
        .then(function () {
                res.status(200).json({message: "image activated"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.put("/organizations/:slug_id/:category_id/:product_id/deactivate", function (req, res, next) {
//deactivate product
    queries.deactivateProduct(req.params.product_id)
        .then(function () {
                res.status(200).json({message: "product deactivated"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.put("/organizations/:slug_id/:category_id/:product_id/:image_id/deactivate", function (req, res, next) {
//deactivate image
    queries.deactivateImage(req.params.image_id)
        .then(function () {
                res.status(200).json({message: "image deactivated"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.delete("/organizations/:slug_id/:category_id/:product_id/:image_id", function (req, res, next) {
//delete image
    queries.deleteImage(req.params.image_id)
        .then(function () {
                res.status(200).json({message: "image deleted"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.delete("/organizations/:slug_id/:category_id/:product_id", function (req, res, next) {
//delete product
    queries.deleteProduct(req.params.product_id)
        .then(function () {
                res.status(200).json({message: "product deleted"})
        })
        .catch(function (error) {
            next(error);
        });
  })
  app.get("/product/:product_id", function(req, res, next) {
    queries.getProduct(req.params.product_id)
        .then(function (result)  {
            return queries.getProductImages(result[0].product_id)
              .then(function(images) {
                result[0]["images"] = images;
                return result
              });
        })
            .then(function (products) {
                res.status(200).json(products)
            })
        .catch(function (error) {
            next(error);
        });
  })
  app.get('/api/upload', (req, res) => {
    const key = `${req.user.id}/${uuid()}.jpeg`;
    s3.getSignedUrl(
      'putObject',
      {
        Bucket: 'my-advanced-node-blog',
        ContentType: 'image/jpeg',
        Key: key
      },
      (err, url) => {
        res.send({ key, url })
      });
  });
  app.get('/products/all', (req, res, next) => {
    queries.Products()
    .then(function (result) {
        return Promise.all(result.map(function (obj) {
            return queries.getAllProductsImages(obj.product_id)
                .then(function (images) {
                    obj["images"] = images;
                    return obj;
                });
        }));
    })
    .then(function (products) {
        res.status(200).json(products)
    })
    .catch(function (error) {
        next(error);
    });
  });
};

const queries = require("../queries/categories.js");
const getOrg = require("../queries/organizations.js");

module.exports = app => {
  app.get('/organizations/:slug_id/categories', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
      .then(function(result) {
        return queries.getOrganizationCategories(result[0].organization_id)
      })
        .then(function(categories) {
          res.status(200).json(categories)
        })
        .catch(function(error) {
          next(error);
        });
  });
  app.get('/organizations/:slug_id/:category_name', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
      .then(function(result) {
        return queries.getOrganizationCategory(req.params.category_name, result[0].organization_id)
      })
        .then(function(categories) {
          res.status(200).json(categories)
        })
        .catch(function(error) {
          next(error);
        });
  });
  app.post('/organizations/:slug_id/categories', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
        .then(function(result) {
            return queries.addOrganizationCategory(req.body.name, result[0].organization_id , req.body.status, req.body.image, req.body.description, req.body.primary, req.body.secondary)
        })
          .then(function(categories) {
            res.status(200).json(categories)
          })
            .catch(function(error) {
              next(error);
            });
  });
  app.delete('/organizations/:slug_id/categories', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
        .then(function(result) {
            return queries.deleteOrganizationCategory(req.body.name, result[0].organization_id)
        })
          .then(function(categories) {
            res.status(200).json(categories)
          })
            .catch(function(error) {
              next(error);
            });
  });
  app.put('/organizations/:slug_id/categories', function(req, res, next) {
  getOrg.getOrganizationId(req.params.slug_id)
      .then(function(result) {
          return queries.updateOrganizationCategory(req.body.id, req.body.name, result[0].organization_id , req.body.status, req.body.image, req.body.description, req.body.primary, req.body.secondary)
      })
        .then(function(categories) {
          res.status(200).json(categories)
        })
          .catch(function(error) {
            next(error);
          });
  });
  app.put('/organizations/:slug_id/categories/activate', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
        .then(function(result) {
            return queries.activateOrganizationCategory(req.body.name, result[0].organization_id)
        })
          .then(function(categories) {
            res.status(200).json(categories)
          })
            .catch(function(error) {
              next(error);
            });
  });
  app.put('/organizations/:slug_id/categories/deactivate', function(req, res, next) {
    getOrg.getOrganizationId(req.params.slug_id)
        .then(function(result) {
            return queries.deactivateOrganizationCategory(req.body.name, result[0].organization_id)
        })
          .then(function(categories) {
            res.status(200).json(categories)
          })
            .catch(function(error) {
              next(error);
            });
  });
};

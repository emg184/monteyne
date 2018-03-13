const queries = require("../queries/organizations.js");

module.exports = app => {
  app.get('/organizations', function(req, res, next) {
    queries.getAllOrganizations()
      .then(function(organizations) {
        res.status(200).json(organizations)
      })
      .catch(function(error) {
        next(error);
      });
  });
  app.post('/organizations', function(req, res, next) {
    queries.addOrganization(req.body.name, req.body.slug_id, req.body.active, req.body.image)
      .then(function() {
        res.status(200).json({message:"inserted"});
      })
        .catch(function(error) {
          next(error);
        });
  })
  app.delete('/organizations/:slug_id', function(req, res, next) {
    queries.deleteOrganization(req.params.slug_id)
    .then(function() {
      res.status(200).json({message:"delete"});
    })
      .catch(function(error) {
        next(error);
      });
  })
  app.put('/organizations/:slug_id/deactivate', function(req, res, next) {
    queries.deactivateOrganization(req.params.slug_id)
    .then(function() {
      res.status(200).json({message:"deactivated"});
    })
      .catch(function(error) {
        next(error);
      });
  })
  app.put('/organizations/:slug_id/activate', function(req, res, next) {
    queries.activateOrganization(req.params.slug_id)
    .then(function() {
      res.status(200).json({message:"activated"});
    })
      .catch(function(error) {
        next(error);
      });
  })
  app.put('/organizations/:slug_id', function(req, res, next) {
    queries.updateOrganization(req.body.name, req.body.slug_id, req.body.activate, req.body.image)
      .then(function() {
        res.status(200).json({ message:"updated" });
      })
        .catch(function(error) {
          next(error);
        })
  })
  app.get('/organizations/:slug_id', function(req, res, next) {
    queries.getOrganization(req.params.slug_id)
      .then(function(organization) {
        res.status(200).json(organization)
      })
      .catch(function(error) {
        next(error);
      });
  });

};

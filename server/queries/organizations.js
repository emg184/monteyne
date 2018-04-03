var catQueries = require("./categories")
var prodQueries = require("./products")

var knex = require("../knex.js");

function Organizations() {
  return knex("organizations");
}

function getAllOrganizations() {
  return Organizations().select().where({ active: true });
}

function addOrganization(name, slug, status=true, image_url) {
  return Organizations().insert({
    organization_name: name,
    slug_id: slug,
    active: status,
    image: image_url
  });
}

function deleteOrganization(slug) {
  return Organizations()
    .where({ slug_id: slug })
      .del()
}

function deactivateOrganization(slug) {
  return Organizations()
    .where({ slug_id: slug })
      .update({ active: false })
}

function activateOrganization(slug) {
  return Organizations()
    .where({ slug_id: slug })
      .update({ active: true })
}

function updateOrganization(name, slug, status=true, image_url) {
  return Organizations().where({ organization_name: name })
    .update({
      organization_name: name,
      slug_id: slug,
      active: status,
      image: image_url
    })
}

function getOrganization(slug) {
  return Organizations()
    .where({ slug_id: slug });
}

function getOrganizationId(slug) {
  return Organizations()
    .where({ slug_id: slug })
}

function getAllOrganizationData(slug_id) {
  return getOrganizationId(slug_id)
          .then(function(org) {
            return catQueries.getOrganizationCategories(org[0].organization_id)
          })
            .then(function (result) {
              var catCollection = []
              result.map(function(res) {
                catCollection.push(res.category_id)
              })
              result.push(catCollection)
              return result
            })
              .then(function (catArray) {
                //console.log(catArray[catArray.length-1])
                return prodQueries.whereInProducts(catArray[catArray.length -1])
              })
}
/*
function getAllOrganizationData(slug_id) {
  return getOrganizationId(slug_id)
    .then(function(org) {
      //console.log(org)
      return catQueries.getOrganizationCategories(org[0].organization_id)
    })
      .then(function (result) {
        //console.log(result)
        var catCollection = []
        result.map(function(res) {
          catCollection.push(res.category_id)
        })
        return catCollection
      })
        .then(function (catArray) {
          //console.log(catArray)
          console.log(prodQueries.whereInProducts(catArray))
          //return prodQueries.whereInProducts(catArray)
          //return Promise.all(catArray.map(function (obj) {
            //console.log(prodQueries.getAllProducts(obj))
            //return prodQueries.getAllProducts(obj)
          })
          //)
        //})
}
*/
/*
function getAllOrganizationData(slug_id) {
  return getOrganizationId(slug_id)
    .then(function(org) {
      console.log(knex.select('*'))
    })
}
*/
module.exports = {
  getAllOrganizations: getAllOrganizations,
  addOrganization: addOrganization,
  deleteOrganization: deleteOrganization,
  deactivateOrganization: deactivateOrganization,
  activateOrganization: activateOrganization,
  updateOrganization: updateOrganization,
  getOrganization: getOrganization,
  getOrganizationId: getOrganizationId,
  getAllOrganizationData: getAllOrganizationData
};

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
/*
function updateOrganization(name, slug, status=true, image_url) {
  return Organizations().where({ organization_name: name })
    .update({
      organization_name: name,
      slug_id: slug,
      active: status,
      image: image_url
    })
}
*/
function updateOrganization(id, name, slug, status=true, image_url) {
  return Organizations().where({ organization_id: id })
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
                var dbPromise = prodQueries.whereInProducts(catArray[catArray.length -1])
                var arrPromise = catArray.slice(0, catArray.length - 1)
                return Promise.all([dbPromise, arrPromise]).then(function(values) {
                  return values
                })
              })
}

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

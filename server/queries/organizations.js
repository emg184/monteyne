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

module.exports = {
  getAllOrganizations: getAllOrganizations,
  addOrganization: addOrganization,
  deleteOrganization: deleteOrganization,
  deactivateOrganization: deactivateOrganization,
  activateOrganization: activateOrganization,
  updateOrganization: updateOrganization,
  getOrganization: getOrganization,
  getOrganizationId: getOrganizationId
};

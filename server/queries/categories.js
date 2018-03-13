var knex = require("../knex.js");

function Categories() {
  return knex('categories');
}

function getOrganizationCategories(organization_id) {
  return Categories()
          .where({
            'organization_id': organization_id
          });
}

function addOrganizationCategory(name, org_id, status=true, image_url) {
  return Categories()
          .insert({
            category_name: name,
            organization_id: org_id,
            active: status,
            image: image_url
          });
}

function getOrganizationCategory(name, org_id) {
  return Categories().where({
    organization_id: org_id,
    category_name: name
  })
}

function deleteOrganizationCategory(name, org_id) {
  return Categories()
          .where({
            organization_id: org_id,
            category_name: name
          })
            .del()
}

function updateOrganizationCategory(name, org_id, image_url, status) {
  return Categories()
          .where({
            organization_id: org_id,
            category_name: name
          })
            .update({
              category_name: name,
              organization_id: org_id,
              active: status,
              image: image_url
            })
}

function activateOrganizationCategory(name, org_id) {
  return Categories()
          .where({
            organization_id: org_id,
            category_name: name
          })
            .update({
              active: true
            })
}

function deactivateOrganizationCategory(name, org_id) {
  return Categories()
          .where({
            organization_id: org_id,
            category_name: name
          })
            .update({
              active: false
            })
}

module.exports = {
  getOrganizationCategories: getOrganizationCategories,
  addOrganizationCategory: addOrganizationCategory,
  getOrganizationCategory: getOrganizationCategory
};

exports.seed = function(knex, Promise) {
  return knex('organizations').del()
    .then(function () {
      return knex('organizations').insert({
        organization_name: "clearview regional high school",
        slug_id: "clearview",
        active: true,
        image: "https://pbs.twimg.com/profile_images/768583836527583232/ISoNks0d.jpg"
      });
    }).then(function () {
      return knex('organizations').insert({
        organization_name: "kingsway regional high school",
        slug_id: "kingsway",
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohLFn9TAOsTzyAlk7d3TJP3kOaFZrvp4tH1NNSvlNioNHmoUR"
      });
    }).then(function () {
      return knex('organizations').insert({
        organization_name: "wayne valley high school",
        slug_id: "wayne_valley",
        active: true,
        image: "https://pbs.twimg.com/profile_images/484736604083216384/xCtLyMQ7_400x400.png"
      });
    });
};

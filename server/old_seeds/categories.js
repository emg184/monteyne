exports.seed = function(knex, Promise) {
  return knex('organizations').del()
    .then(function () {
      return knex('categories').insert({
        category_name: "Football",
        organization_id: 1,
        active: true,
        image: "https://images-na.ssl-images-amazon.com/images/I/91OLSNrc6nL._SL1500_.jpg"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Soccer",
        organization_id: 1,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBYPeN3E0sIKjff8yMYALLb0qxesEk-D2plhtXbdcICcnORjNPg"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Baseball",
        organization_id: 1,
        active: true,
        image: "https://us.123rf.com/450wm/chromaco/chromaco1210/chromaco121000011/15749966-fast-pitch-baseball-boy-cartoon-player-with-bat-illustration.jpg?ver=6"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Cheer",
        organization_id: 2,
        active: true,
        image: "https://cdn1.sportngin.com/attachments/photo/4558/8227/IMG_5007_large.JPG"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Softball",
        organization_id: 2,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQee42m0Axu48jWQrMdpuaduxQFm0ZGlLlThIDHPGVSNedSAEW-6A"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Dance",
        organization_id: 2,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSOyGxA4ZEAdApT4oPJLVlHoBDby224BPKeoCAlOPGIFLqQCP"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Rugby",
        organization_id: 3,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIISdNONJykE92abFttby96LYUsLZbCzhr3gajKlUxKMX2Aau38A"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Polo",
        organization_id: 3,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsxfT_rjQyD30gXju2RTHxg1aQmk9lbxOimSX7cDuuKTJMG8-NA"
      });
    }).then(function () {
      return knex('categories').insert({
        category_name: "Golf",
        organization_id: 3,
        active: true,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXMyqgp6Tsh_GOlKfvOU8wiuiL2AotDKr_Q8-RnOeERaVuD4C"
      });
    });
};

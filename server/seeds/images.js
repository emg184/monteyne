exports.seed = function(knex, Promise) {
  return knex('images').del()
    .then(function () {
      return knex('images').insert({
        image_name: "Sweatshirt",
        product_id: 1,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-3YOEQnbXp_XJtg9J9riZ_TtoTyjY5bLjLIAUiCdMHHsdqqi"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "Sweatshirt",
        product_id: 1,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSpC49D3YY1smbCHbn67aIeM6eG8q163RJUarClteHsQ-imGBCg"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "Sweatshirt",
        product_id: 1,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTegjgUXzQch5Ou0PtJVlCRGjGpjZ5ZeBbzuUXIPvWc6sP1ejCQg"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "T-Shirt",
        product_id: 2,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdUC0xpLMvi0l7QcPa7u87uye6AQp765PerbIXx7UyV7i-lx9xg"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "T-Shirt",
        product_id: 2,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_YwVlWwpJA3x-dCL5ECv-YRj1IsMLxWtBNDQgNFmApSICdJ1Q"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "T-Shirt",
        product_id: 2,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEMMZZH17NO_CmRaiSOVSvGNCxT8cBWfspZK82rWR1qX7z9nz"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "Sweatpants",
        product_id: 3,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6vdn12dTHakqOa-EwGNKZoYzqkLJ2Gx7O1WHTir6N6i6kF6w"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "Sweatpants",
        product_id: 3,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrimg6-7EgFY8P59MKAX68LC2ql6lp4EwkfT6EdnswYVDmJX00pw"
      });
    }).then(function () {
      return knex('images').insert({
        image_name: "Sweatpants",
        product_id: 3,
        active: true,
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_sxpjEBI8j4L0DAVifUGEVMo2ghtCIzBNdMkrvlZn_KLb6EQyQ"
      });
    });
};

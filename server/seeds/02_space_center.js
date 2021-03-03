//TODO:Export given spacenter.JSON to const and insert here
exports.seed = function(knex, Promise) {
  return knex('space_center').del()
    .then(function () {
      return knex('space_center').insert([
        {
          name: "Hintz Union Space Center",
          uid: "da9c2dee-3b38-4d21-b911-083599c05dad",
          description: "Aut id sit et. Animi et minus et quia necessitatibus. Aut et perspiciatis veritatis et ut dolores asperiores fugiat.",
          latitude: "-35.9083",
          longitude: "-34.7214",
          planet_id:1
        },
        {
          name: "Jedediah Dale Space Center",
          uid: "3d1d7388-5760-4658-aa3d-b90d88cc457d",
          description: "Odit assumenda qui fugit. Dolorem et maiores aspernatur. Dolor laborum quia sit sint. Dolor iure in consequuntur excepturi velit excepturi eligendi ab.",
          latitude: "-34.0737",
          longitude: "124.5693",
          planet_id:2
        },
      ]);
    });
};

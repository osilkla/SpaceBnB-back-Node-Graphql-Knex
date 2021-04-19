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
        {
          name: "Nayeli Island Space Center",
          uid: "c34b6ac2-ba04-47fb-8421-37d565cdaae7",
          description: "Accusamus quidem maxime. Ipsam atque sit eius consequuntur ipsum consequatur id quae. Adipisci consequatur illum officia fuga placeat nobis a. Iste quod deserunt qui quia consequuntur perspiciatis dolores ex nisi.",
          latitude: "-88.4489",
          longitude: "-102.8155",
          planet_code: "MER"
        },
        {
          name: "Tina Motorway Space Center",
          uid: "06ab59b4-4ccb-49a0-b714-c1a70542b41b",
          description: "Vitae soluta laborum et beatae. Aut velit ut est. Quia fuga eius illum maxime. Nam officia accusantium nihil possimus. Fuga unde minima quo necessitatibus dolorum. Magnam eos rerum rerum natus laborum magni voluptas.",
          latitude: "53.9827",
          longitude: "-152.0489",
          planet_code: "MER"
        },
        {
          name: "Jules Roads Space Center",
          uid: "ee1e3351-fd1e-462c-9fc8-441bd9d4eb31",
          description: "Iure sed cum quasi ullam. Iste accusantium enim repellat. Ratione quibusdam officiis minima sequi illum. Officiis modi ad repellendus fugit corporis qui culpa ut. Excepturi quisquam ut sapiente et aut facilis quibusdam esse.",
          latitude: "49.4308",
          longitude: "86.5286",
          planet_code: "MER"
        },
        {
          name: "Simonis Underpass Space Center",
          uid: "a721033e-41a4-413d-9e65-854c33635b61",
          description: "Amet exercitationem voluptate. Sit amet dolor sit voluptatem quia voluptas veniam optio optio. Commodi recusandae soluta sed atque voluptates sint. Totam nihil illum delectus. Similique tempore laudantium enim corrupti architecto porro. Et sunt voluptas sunt eligendi quaerat vel est accusantium vel.",
          latitude: "-50.1055",
          longitude: "79.5640",
          planet_code: "MER"
        },
        {
          name: "Okuneva Hill Space Center",
          uid: "7d15aeab-4566-4653-bbba-7206db064483",
          description: "Fuga sed architecto neque nesciunt expedita et explicabo. Quia et tenetur rem illum odit. Error dolorum aut. Vel quaerat aliquam porro quos rerum sunt corrupti. Hic sunt adipisci ipsa sed omnis dolorum accusantium nisi totam. Et odit dicta saepe accusantium corrupti.",
          latitude: "9.9751",
          longitude: "-149.8397",
          planet_code: "MER"
        },
        {
          name: "Dina Plain Space Center",
          uid: "fbf304e2-af2e-4f59-8a30-cdb72c33ac2c",
          description: "Voluptatem sed quas totam occaecati quibusdam dolores doloremque. Sequi quod vero. Ea itaque aperiam mollitia qui voluptatem. Earum fugit aliquam cupiditate.",
          latitude: "14.8188",
          longitude: "27.7994",
          planet_code: "MER"
        },
        {
          name: "Greg Heights Space Center",
          uid: "98f1fc21-1876-4c2b-b3d4-f670b6fd5545",
          description: "Nihil corporis est doloremque et. Dolorem eveniet quia. Exercitationem harum consequatur quis molestiae molestiae possimus debitis. Ut quis eum incidunt dolorem non repudiandae soluta. Ea voluptatem suscipit fugiat numquam ad sit. Inventore voluptate ut et voluptatibus perspiciatis illum.",
          latitude: "56.7923",
          longitude: "4.1392",
          planet_code: "MER"
        }
      ]);
    });
};

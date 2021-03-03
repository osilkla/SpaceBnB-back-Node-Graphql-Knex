exports.seed = function(knex, Promise) {
  return knex('flight').del()
    .then(function () {
      return knex('flight').insert([
        {
          code: "8e2a052645d8b757731df00bd1697f9e",
          departureAt: "2021-01-01T00:00:00Z",
          seatCount: 747,
          launchSite:1,
          landingSite:2
        },
        {
          code: "93913a8c3aeb023aec2c7122c7a407",
          departureAt: "2020-01-01T00:00:00Z",
          seatCount: 547,
          launchSite:2,
          landingSite:1
        },
      ]);
    });
};

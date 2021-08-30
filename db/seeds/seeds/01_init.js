exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cycle_data")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cycle_data").insert([
        {
          id: 1,
          date: "2021-08-29",
          distance: 70,
          avg_speed: 25,
          calories: 1500,
          top_speed: 50,
        },
        {
          id: 2,
          date: "2021-08-30",
          distance: 100,
          avg_speed: 20,
          calories: 800,
          top_speed: 35,
        },
        {
          id: 3,
          date: "2021-08-31",
          distance: 55,
          avg_speed: 28,
          calories: 1400,
          top_speed: 49,
        },
        {
          id: 4,
          date: "2021-09-03",
          distance: 150,
          avg_speed: 22,
          calories: 2500,
          top_speed: 55,
        },
        {
          id: 5,
          date: "2021-09-06",
          distance: 15,
          avg_speed: 65,
          calories: 200,
          top_speed: 15,
        },
      ]);
    });
};

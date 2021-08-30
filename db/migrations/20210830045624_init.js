exports.up = function (knex) {
  return knex.schema.createTable("cycle_data", (table) => {
    table.increments().primary("id");
    table.date("date").notNullable();
    table.integer("distance").notNullable();
    table.integer("avg_speed").notNullable();
    table.integer("calories").notNullable();
    table.integer("top_speed").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cycle_data");
};

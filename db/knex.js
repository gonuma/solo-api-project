require("dotenv").config({ path: "../.env" });

console.log(process.env.DB_USER);
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    seeds: {
      directory: "./seeds",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

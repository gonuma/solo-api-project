const knex = require("knex");
const knexFile = require("./knex");

//TODO make sure env file is being imported/used properly.
const db = knex(knexFile.development);

module.exports = db;

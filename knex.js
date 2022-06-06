const { MockClient } = require("knex-mock-client");
const knex = require('knex');

const createKnex = function () {
  return knex({
    client: MockClient,
    dialect: "pg",
  });
};

module.exports = createKnex;

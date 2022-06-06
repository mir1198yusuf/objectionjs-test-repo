const { MockClient } = require("knex-mock-client");

const createKnex = function () {
  const config = {
    client: MockClient,
    dialect: "pg",
  };
  return config;
};

module.exports = createKnex;

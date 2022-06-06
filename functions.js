const AbcModel = require("./models");
const functionOne = async function () {
  await AbcModel.query().upsertGraph([{ id: 1, x: 2 }, { x: 1 }]);
  return {};
};

module.exports = functionOne;

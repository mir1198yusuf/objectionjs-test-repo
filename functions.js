const AbcModel = require("./models");
const functionOne = async function () {
  await AbcModel.query().upsertGraph([{ id: 1, x: 2 }, { x: 1 }]);
  return {};
};

const functionTwo = async function () {
  const abc = await AbcModel.query().findOne("id", 1);
  await abc.$query().update({ x: 2 });
};

module.exports = { functionOne, functionTwo };

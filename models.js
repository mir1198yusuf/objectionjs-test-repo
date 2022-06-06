const createKnex = require("./knex");
const { Model } = require("objection");

class AbcModel extends Model {
  static get idColumn() {
    return ["id"];
  }
  static tableName = "abc";
}

AbcModel.knex(createKnex());
module.exports = AbcModel;

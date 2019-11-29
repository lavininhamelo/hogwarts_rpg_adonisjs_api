"use strict";

const Model = use("Model");

class Token extends Model {
  /**
   * @method user Singular.
   * @return {Object}
   */
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Token;

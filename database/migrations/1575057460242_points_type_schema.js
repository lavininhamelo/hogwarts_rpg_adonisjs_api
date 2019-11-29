"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PointsTypeSchema extends Schema {
  up() {
    this.create("points_types", table => {
      table.increments();
      table.string("name", 256);
      table.text("observation");
      table.timestamps();
    });
  }

  down() {
    this.drop("points_types");
  }
}

module.exports = PointsTypeSchema;

"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PointsSchema extends Schema {
  up() {
    this.create("points", table => {
      table.increments();
      table
        .integer("house_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("houses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("points_type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("points_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("points");
      table.timestamps();
    });
  }

  down() {
    this.drop("points");
  }
}

module.exports = PointsSchema;

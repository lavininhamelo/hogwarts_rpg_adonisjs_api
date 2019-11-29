"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RoundSchema extends Schema {
  up() {
    this.create("rounds", table => {
      table.increments();
      table.datetime("start_date");
      table.datetime("end_date");
      table
        .integer("winner_house_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("houses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("winner_points");
      table.timestamps();
    });
  }

  down() {
    this.drop("rounds");
  }
}

module.exports = RoundSchema;

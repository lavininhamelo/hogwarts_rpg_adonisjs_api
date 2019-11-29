"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class HouseSchema extends Schema {
  up() {
    this.create("houses", table => {
      table.increments();
      table.string("name", 256);
      table.string("phrase", 256);
      table.integer("current_points");
      table.integer("victories");
      table
        .integer("director_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("houses");
  }
}

module.exports = HouseSchema;

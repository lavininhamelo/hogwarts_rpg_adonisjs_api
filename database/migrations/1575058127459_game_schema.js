"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GameSchema extends Schema {
  up() {
    this.create("games", table => {
      table.increments();
      table.string("name", 256);
      table.string("description", 256);
      table.text("rules");
      table.integer("players_number");
      table.timestamps();
    });
  }

  down() {
    this.drop("games");
  }
}

module.exports = GameSchema;

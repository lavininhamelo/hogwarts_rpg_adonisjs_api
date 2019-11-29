"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GameMatchSchema extends Schema {
  up() {
    this.create("game_matches", table => {
      table.increments();
      table
        .integer("game_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("games")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("winner_player")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("winner_points");
      table.timestamps();
    });
  }

  down() {
    this.drop("game_matches");
  }
}

module.exports = GameMatchSchema;

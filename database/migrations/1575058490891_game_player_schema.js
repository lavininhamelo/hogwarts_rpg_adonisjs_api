"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class GamePlayerSchema extends Schema {
  up() {
    this.create("game_players", table => {
      table.increments();
      table
        .integer("game_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("game_matches")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("player_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("points");
      table.timestamps();
    });
  }

  down() {
    this.drop("game_players");
  }
}

module.exports = GamePlayerSchema;

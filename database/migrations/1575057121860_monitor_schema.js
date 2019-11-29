"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MonitorSchema extends Schema {
  up() {
    this.create("monitors", table => {
      table
        .integer("house_id")
        .unsigned()
        .references("id")
        .inTable("houses")
        .notNullable();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.unique(["house_id", "user_id"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("monitors");
  }
}

module.exports = MonitorSchema;

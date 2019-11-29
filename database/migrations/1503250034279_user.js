"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("name", 50).nullable();
      table.string("lastname", 50).nullable();
      table
        .string("username", 15)
        .notNullable()
        .unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("account_status");
      table.integer("points").defaultTo(0);
      table.int("level").defaultTo(0);
      table.string("wand");
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;

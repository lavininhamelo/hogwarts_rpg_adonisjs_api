"use strict";

const Antl = use("Antl");
const Event = use("Event");
const Persona = use("Persona");

class RegisterController {
  async store({ request, auth, response }) {
    const payload = request.only([
      "email",
      "password",
      "password_confirmation",
      "username"
    ]);

    await Persona.register(payload);
    // const user        = await Persona.register(payload);
    // const accessToken = await auth.generate(user);

    return response.status(201).json({
      message: "Success!"
    });
  }
  async unverified({ auth }) {
    const user = await auth.user;
    const userToken = await user
      .tokens()
      .where("type", "email")
      .first();
    const token = userToken.token;

    Event.fire("user::created", { user, token });
  }
}

module.exports = RegisterController;

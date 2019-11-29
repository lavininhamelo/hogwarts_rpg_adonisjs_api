"use strict";

const Antl = use("Antl");
const Persona = use("Persona");

class ProfileController {
  async currentData({ auth }) {
    return auth.user;
  }

  async update({ request, auth, response }) {
    const payload = request.only(["email", "name", "username"]);

    const user = auth.user;

    await Persona.updateProfile(user, payload);

    return response.status(200).json({
      message: "Profile updated"
    });
  }
}

module.exports = ProfileController;

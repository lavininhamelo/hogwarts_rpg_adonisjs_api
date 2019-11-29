"use strict";

const Encryption = use("Encryption");
const Persona = use("Persona");

class PasswordController {
  async updatePassword({ request, auth, response }) {
    const payload = request.only([
      "old_password",
      "password",
      "password_confirmation"
    ]);

    const user = auth.user;

    await Persona.updatePassword(user, payload);

    return response.status(200).json({
      message: "Password updated!"
    });
  }

  async updatePasswordByToken({ request, params, response }) {
    const token = Encryption.base64Decode(params.token);
    const payload = request.only(["password", "password_confirmation"]);

    await Persona.updatePasswordByToken(token, payload);

    return response.status(200).json({
      message: "Password updated!"
    });
  }

  async forgotPassword({ request }) {
    await Persona.forgotPassword(request.input("uid"));
  }
}

module.exports = PasswordController;

"use strict";

const Encryption = use("Encryption");
const Persona = use("Persona");

class RegisterVerifyEmailController {
  async validate({ params, response }) {
    const token = Encryption.base64Decode(params.token);

    await Persona.verifyEmail(token);

    return response.status(200).json({
      message: "E-mail verified"
    });
  }
}

module.exports = RegisterVerifyEmailController;

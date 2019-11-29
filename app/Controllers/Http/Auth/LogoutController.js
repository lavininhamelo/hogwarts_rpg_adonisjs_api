"use strict";

class LogoutController {
  async deauthenticate({ response, auth }) {
    const headerToken = auth.getAuthHeader();

    await auth.revokeTokens([headerToken], true);

    return response.status(200).json({
      message: "Logged Out"
    });
  }
}

module.exports = LogoutController;

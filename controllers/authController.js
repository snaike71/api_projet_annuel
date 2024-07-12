const AuthService = require("../services/authService");

module.exports = {
  login: async function (req, res, next) {
    const { email, password } = req.body;

    try {
      const userData = await AuthService.login(email, password);
      if (userData.user) {
        delete userData.user.dataValues.password;
      }
      res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  },
};

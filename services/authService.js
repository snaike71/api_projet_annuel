const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Authentication failed: User not found");
  }
  return user;
}

module.exports = {
  login: async function (email, password) {
    const user = await findUserByEmail(email);

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Authentication failed: Incorrect password');
    }

    const token = jwt.sign(
      {
        email: user.email,
        user_id: user.id,
      },
      process.env.SECRET_API_KEY,
      { expiresIn: "24h" }
    );

    return { user, token };
  },

  verifyAndDecode: function (req, res) {
    try {
      if (!req.headers.authorization) {
        return { valid: false, error: "Unauthorized" };
      }

      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_API_KEY);
      if (!decodedToken.email || !decodedToken.user_id) {
        throw new Error("Invalid token");
      }
      res.locals.decodedToken = decodedToken;
      return { valid: true };
    } catch (err) {
      console.error("[verifyAndDecode] " + err);
      return { valid: false, error: "Unauthorized" };
    }
  },
};

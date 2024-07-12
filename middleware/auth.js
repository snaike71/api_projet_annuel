const AuthJwtSrv = require("../services/authService");


module.exports = {
  authJwt: (req, res, next) => {
    const tokenValidity = AuthJwtSrv.verifyAndDecode(req, res);
    if (!tokenValidity.valid) {
      return res.status(401).json({ error: "Invalid token" });
    }
    return next();
  },
};

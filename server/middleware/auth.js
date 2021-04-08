const { User } = require("../models/User.js");

let auth = (req, res, next) => {
  let token = req.cookies.X_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };

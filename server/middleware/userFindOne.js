const { User } = require("../models/User.js");
const { USER_MODEL } = require("../config/types.js");
const { findOneError, notFoundError } = require("../function/errorResponse.js");

let leaderFindOne = (req, res, next) => {
  User.findOne({ _id: req.body.leader }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.leader));

    req.user = user;
    next();
  });
};

let userFindOne = (req, res, next) => {
  User.findOne({ token: req.cookies.X_auth }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.userId));

    req.user = user;
    next();
  });
};
module.exports = { leaderFindOne, userFindOne };

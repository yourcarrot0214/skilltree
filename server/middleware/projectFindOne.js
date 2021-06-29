const { Project } = require("../models/Project.js");
const { PROJECT_MODEL } = require("../config/types.js");
const { findOneError, notFoundError } = require("../function/errorResponse.js");

let projectFindOne = (req, res, next) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    req.project = project;
    next();
  });
};

module.exports = { projectFindOne };

const { Study } = require("../models/Study.js");
const { STUDY_MODEL } = require("../config/types.js");
const { findOneError, notFoundError } = require("../function/errorResponse.js");

let studyFindOne = (req, res, next) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    req.study = study;
    next();
  });
};

const studyFindById = (req, res, next) => {
  Study.findById(req.params.id, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.params.id));

    req.study = study;
    next();
  });
};

module.exports = { studyFindOne, studyFindById };

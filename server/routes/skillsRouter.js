const express = require("express");
const router = express.Router();

const { Skills } = require("../models/Skills.js");
const { SKILLS_MODEL } = require("../config/types.js");
const { auth } = require("../middleware/auth.js");

const {
  findOneAndUpdateError,
  findOneAndDeleteError,
  notFoundError,
  findOneError,
} = require("../function/errorResponse.js");

const {
  skillSaveError,
  skillSaveSuccess,
  skillListError,
  skillListSuccess,
  skillSearchError,
  skillNotFound,
  skillSearchSuccess,
  skillNotFoundAfterUpdate,
  skillUserUpdateSuccess,
} = require("../function/skillsResponse.js");

router.post("/upload", (req, res) => {
  const skills = new Skills(req.body);
  skills.save((err, skillInfo) => {
    if (err) return res.json(skillSaveError(err));
    return res.status(200).json(skillSaveSuccess(skillInfo));
  });
});

router.get("/list", (req, res) => {
  Skills.find({}, (err, docs) => {
    if (err) return res.json(skillListError(err));
    return res.status(200).json(skillListSuccess(docs));
  });
});

router.post("/search", (req, res) => {
  Skills.findOne({ name: req.body.name }, (err, skill) => {
    if (err) res.json(skillSearchError(err));
    if (!skill) {
      return res.json(skillNotFound());
    }
    return res.status(200).json(skillSearchSuccess(skill));
  });
});

router.patch("/technitianUsers/add", auth, (req, res) => {
  Skills.findOne({ _id: req.body._id }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        technitianUsers: [
          ...skill.technitianUsers,
          {
            role: req.user.role,
            _id: req.user._id,
            email: req.user.email,
            name: req.user.name,
          },
        ],
      },
      { new: true },
      (err, skill) => {
        if (err) return res.json(findOneAndUpdateError(SKILLS_MODEL, err));
        if (!skill) return res.json(skillNotFoundAfterUpdate());

        return res.status(200).json(skillUserUpdateSuccess(skill));
      }
    );
  });
});

router.patch("/technitianUsers/delete", auth, (req, res) => {
  const requestSkillId = req.body.id;
  const requestUserId = req.user._id;

  Skills.findOne({ _id: requestSkillId }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        technitianUsers: skill.technitianUsers.filter(
          (user) => String(user._id) !== String(requestUserId)
        ),
      },
      { new: true },
      (err, skill) => {
        if (err) return res.json(findOneAndUpdateError(SKILLS_MODEL, err));
        if (!skill) return res.json(skillNotFoundAfterUpdate());

        return res.status(200).json(skillUserUpdateSuccess(skill));
      }
    );
  });
});

router.patch("/learningUsers/add", auth, (req, res) => {
  Skills.findOne({ _id: req.body._id }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        learningUsers: [
          ...skill.learningUsers,
          {
            role: req.user.role,
            _id: req.user._id,
            email: req.user.email,
            name: req.user.name,
          },
        ],
      },
      { new: true },
      (err, skill) => {
        if (err) return res.json(findOneAndUpdateError(SKILLS_MODEL, err));
        if (!skill) return res.json(skillNotFoundAfterUpdate());

        return res.status(200).json(skillUserUpdateSuccess(skill));
      }
    );
  });
});

router.patch("/learningUsers/delete", auth, (req, res) => {
  const requestSkillId = req.body.id;
  const requestUserId = req.user._id;

  Skills.findOne({ _id: requestSkillId }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        learningUsers: skill.learningUsers.filter(
          (user) => String(user._id) !== String(requestUserId)
        ),
      },
      { new: true },
      (err, skill) => {
        if (err) return res.json(findOneAndUpdateError(SKILLS_MODEL, err));
        if (!skill) return res.json(skillNotFoundAfterUpdate());

        return res.status(200).json(skillUserUpdateSuccess(skill));
      }
    );
  });
});

module.exports = router;

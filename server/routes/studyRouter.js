const express = require("express");
const app = express();
const router = express.Router();

const { Study } = require("../models/Study.js");
const { User } = require("../models/User.js");
const { studyFindOne } = require("../middleware/studyFindOne.js");
const { leaderFindOne, userFindOne } = require("../middleware/userFindOne.js");

const { STUDY_MODEL, USER_MODEL } = require("../config/types.js");

const {
  findOneError,
  notFoundError,
  findOneAndUpdateError,
  findOneAndDeleteError,
} = require("../function/errorResponse.js");

const {
  studySaveError,
  studySaveSuccess,
  getStudyListError,
  getStudyListSuccess,
  studyUpdateSuccess,
  studyDeleteSuccess,
} = require("../function/studyResponse.js");

const helmet = require("helmet");

app.disable("x-powered-by");

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": ["'self'"],
      "script-src": ["'self'"],
      "style-src": ["'self'", "'unsafe-inline'"],
      "font-src": ["'self'"],
    },
  })
);

router.post("/create", leaderFindOne, (req, res) => {
  const study = new Study(req.body);

  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      study: {
        ...req.user.study,
        leader: req.user.study.leader.concat(study._id),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.user._id));
    }
  );

  study.save((err, studyInfo) => {
    if (err) return res.json(studySaveError(err));
    return res.status(200).json(studySaveSuccess(studyInfo));
  });
});

router.get("/get/list", (req, res) => {
  Study.find({}, (err, docs) => {
    if (err) return res.json(getStudyListError(err));
    return res.status(200).json(getStudyListSuccess(docs));
  });
});

router.post("/update", (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.id },
    {
      title: req.body.title,
      description: req.body.description,
      skills: req.body.skills,
      personnel: req.body.personnel,
      status: req.body.status,
    },
    { new: true },
    (err, studyInfo) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!studyInfo) return res.json(notFoundError(STUDY_MODEL, req.body.id));
      return res.status(200).json(studyUpdateSuccess(studyInfo));
    }
  );
});

router.post("/delete", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      study: {
        ...req.user.study,
        leader: req.user.study.leader.filter(
          (classId) => String(classId) !== String(req.body.classId)
        ),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.body.userId));
    }
  );

  Study.findOneAndDelete({ _id: req.body.classId }, (err, deletedStudy) => {
    if (err) return res.json(findOneAndDeleteError(STUDY_MODEL, err));
    if (!deletedStudy)
      return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    return res.status(200).json(studyDeleteSuccess(req.body.classId));
  });
});

router.post("/apply", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    { volunteer: req.study.volunteer.concat(req.body.userId) },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.post("/apply/cancel", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.study.volunteer.filter(
        (study) => study !== req.body.userId
      ),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(SKILLS_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.post("/apply/accept", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.study.volunteer.filter(
        (userId) => userId !== req.body.userId
      ),
      members: req.study.members.concat(req.body.userId),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.post("/apply/reject", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.study.volunteer.filter(
        (userId) => userId !== req.body.userId
      ),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.post("/member/leave", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    {
      members: req.study.members.filter((member) => member !== req.body.userId),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.post("/member/expulsion", studyFindOne, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.body.classId },
    {
      members: req.study.members.filter((userId) => userId !== req.body.userId),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.body.classId));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

module.exports = router;

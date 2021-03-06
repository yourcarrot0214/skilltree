const express = require("express");
const router = express.Router();

const { Study } = require("../models/Study.js");
const { User } = require("../models/User.js");
const {
  studyFindOne,
  studyFindById,
} = require("../middleware/studyFindOne.js");
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

router.post("/", leaderFindOne, (req, res) => {
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

router.get("/", (req, res) => {
  Study.find({}, (err, docs) => {
    if (err) return res.json(getStudyListError(err));
    return res.status(200).json(getStudyListSuccess(docs));
  });
});

router.patch("/:id", (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.params.id },
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
      if (!studyInfo)
        return res.json(notFoundError(STUDY_MODEL, req.params.id));
      return res.status(200).json(studyUpdateSuccess(studyInfo));
    }
  );
});

router.delete("/:id", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      study: {
        ...req.user.study,
        leader: req.user.study.leader.filter(
          (classId) => String(classId) !== String(req.params.id)
        ),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.user._id));
    }
  );

  Study.findOneAndDelete({ _id: req.params.id }, (err, deletedStudy) => {
    if (err) return res.json(findOneAndDeleteError(STUDY_MODEL, err));
    if (!deletedStudy)
      return res.json(notFoundError(STUDY_MODEL, req.params.id));

    return res.status(200).json(studyDeleteSuccess(req.params.id));
  });
});

router.patch("/apply/:id", userFindOne, studyFindById, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.params.id },
    { volunteer: req.study.volunteer.concat(req.user._id) },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(STUDY_MODEL, req.params.id));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.delete("/apply/:id", userFindOne, studyFindById, (req, res) => {
  Study.findOneAndUpdate(
    { _id: req.params.id },
    {
      volunteer: req.study.volunteer.filter((user) => {
        user !== req.user._id;
      }),
    },
    { new: true },
    (err, updatedStudy) => {
      if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
      if (!updatedStudy)
        return res.json(notFoundError(SKILLS_MODEL, req.params.id));

      return res.status(200).json(studyUpdateSuccess(updatedStudy));
    }
  );
});

router.patch("/apply/accept", studyFindOne, (req, res) => {
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

router.patch("/apply/reject", studyFindOne, (req, res) => {
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

router.patch("/member/leave", studyFindOne, (req, res) => {
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

router.patch("/member/expulsion", studyFindOne, (req, res) => {
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

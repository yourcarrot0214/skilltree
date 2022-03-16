const express = require("express");
const router = express.Router();

const { Project } = require("../models/Project.js");
const { User } = require("../models/User.js");
const {
  projectFindOne,
  projectFindById,
} = require("../middleware/projectFindOne.js");
const { leaderFindOne, userFindOne } = require("../middleware/userFindOne.js");

const { PROJECT_MODEL, USER_MODEL } = require("../config/types.js");

const {
  findOneError,
  notFoundError,
  findOneAndUpdateError,
  findOneAndDeleteError,
} = require("../function/errorResponse.js");

const {
  projectSaveError,
  projectSaveSuccess,
  getProjectListError,
  getProjectListSuccess,
  projectUpdateSuccess,
  projectDeleteSuccess,
} = require("../function/projectResponse.js");

router.post("/", leaderFindOne, (req, res) => {
  const project = new Project(req.body);

  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      project: {
        ...req.user.project,
        leader: req.user.project.leader.concat(project._id),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser) res.json(notFoundError(USER_MODEL, req.user._id));
    }
  );

  project.save((err, projectInfo) => {
    if (err) return res.json(projectSaveError(err));
    return res.status(200).json(projectSaveSuccess(projectInfo));
  });
});

router.get("/", (req, res) => {
  Project.find({}, (err, docs) => {
    if (err) return res.json(getProjectListError(err));
    return res.status(200).json(getProjectListSuccess(docs));
  });
});

router.patch("/:id", (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
      skills: req.body.skills,
      personnel: req.body.personnel,
      status: req.body.status,
    },
    { new: true },
    (err, projectInfo) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!projectInfo)
        return res.json(notFoundError(PROJECT_MODEL, req.params.id));
      return res.status(200).json(projectUpdateSuccess(projectInfo));
    }
  );
});

router.delete("/:id", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      project: {
        ...req.user.project,
        leader: req.user.project.leader.filter(
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

  Project.findOneAndDelete({ _id: req.params.id }, (err, deletedProject) => {
    if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
    if (!deletedProject)
      return res.json(notFoundError(PROJECT_MODEL, req.params.id));

    return res.status(200).json(projectDeleteSuccess(req.params.id));
  });
});

router.patch("/apply/:id", userFindOne, projectFindById, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.params.id },
    { volunteer: req.project.volunteer.concat(req.user._id) },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.params.id));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.delete("/apply/:id", userFindOne, projectFindById, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.params.id },
    {
      volunteer: req.project.volunteer.filter((user) => {
        user !== req.user._id;
      }),
    },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.params.id));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.patch("/apply/accept", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.project.volunteer.filter(
        (userId) => userId !== req.body.userId
      ),
      members: req.project.members.concat(req.body.userId),
    },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.patch("/apply/reject", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.project.volunteer.filter(
        (userId) => userId !== req.body.userId
      ),
    },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.patch("/member/leave", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    {
      members: req.project.members.filter(
        (member) => member !== req.body.userId
      ),
    },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.patch("/member/expulsion", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    {
      members: req.project.members.filter(
        (userId) => userId !== req.body.userId
      ),
    },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

module.exports = router;

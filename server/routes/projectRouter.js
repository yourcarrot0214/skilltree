const express = require("express");
const app = express();
const router = express.Router();

const { Project } = require("../models/Project.js");
const { User } = require("../models/User.js");
const { projectFindOne } = require("../middleware/projectFindOne.js");
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

router.get("/get/list", (req, res) => {
  Project.find({}, (err, docs) => {
    if (err) return res.json(getProjectListError(err));
    return res.status(200).json(getProjectListSuccess(docs));
  });
});

router.post("/update", (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.id },
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
        return res.json(notFoundError(PROJECT_MODEL, req.body.id));
      return res.status(200).json(projectUpdateSuccess(projectInfo));
    }
  );
});

router.post("/delete", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    {
      project: {
        ...req.user.project,
        leader: req.user.project.leader.filter(
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

  Project.findOneAndDelete({ _id: req.body.classId }, (err, deletedProject) => {
    if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
    if (!deletedProject)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    return res.status(200).json(projectDeleteSuccess(req.body.classId));
  });
});

router.post("/apply", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    { volunteer: req.project.volunteer.concat(req.body.userId) },
    { new: true },
    (err, updatedProject) => {
      if (err) return res.json(findOneError(PROJECT_MODEL, err));
      if (!updatedProject)
        return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

      return res.status(200).json(projectUpdateSuccess(updatedProject));
    }
  );
});

router.post("/apply/cancel", projectFindOne, (req, res) => {
  Project.findOneAndUpdate(
    { _id: req.body.classId },
    {
      volunteer: req.project.volunteer.filter(
        (user) => user !== req.body.userId
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

router.post("/apply/accept", projectFindOne, (req, res) => {
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

router.post("/apply/reject", projectFindOne, (req, res) => {
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

router.post("/member/leave", projectFindOne, (req, res) => {
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

router.post("/member/expulsion", projectFindOne, (req, res) => {
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

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 5000;
const CONFIG = require("./config/key.js");

const { User } = require("./models/User.js");
const { Skills } = require("./models/Skills");
const { Project } = require("./models/Project.js");
const { Study } = require("./models/Study.js");
const { auth } = require("./middleware/auth.js");
const { projectFindOne } = require("./middleware/projectFindOne.js");
const {
  SKILLS_MODEL,
  USER_MODEL,
  PROJECT_MODEL,
  STUDY_MODEL,
} = require("./config/types.js");

const {
  findOneAndUpdateError,
  findOneAndDeleteError,
  notFoundError,
  findOneError,
} = require("./function/errorResponse");

const {
  saveError,
  signupSuccess,
  userFindOneError,
  userNotFound,
  comparePasswordError,
  isMatchError,
  generateTokenError,
  loginSuccess,
  authSuccess,
  logoutSuccess,
  encryptionError,
  passwordUpdateSuccess,
  userInfoSuccess,
  userApplyUpdate,
} = require("./function/userResponse.js");

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
} = require("./function/skillsResponse.js");

const {
  projectSaveError,
  projectSaveSuccess,
  getProjectListError,
  getProjectListSuccess,
  projectUpdateSuccess,
  projectDeleteSuccess,
} = require("./function/projectResponse.js");

const {
  studySaveError,
  studySaveSuccess,
  getStudyListError,
  getStudyListSuccess,
  studyUpdateSuccess,
  studyDeleteSuccess,
} = require("./function/studyResponse.js");

app.use(express.json());
app.use(cookieParser());

const mongoose = require("mongoose");
mongoose
  .connect(CONFIG.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected ...."))
  .catch((err) => console.log(err));

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json(saveError(USER_MODEL, err));
    return res.status(200).json(signupSuccess(userInfo));
  });
});

app.post("/api/users/get/name", (req, res) => {
  User.findOne({ _id: req.body._id }, (err, userInfo) => {
    if (err) res.json(findOneError(USER_MODEL, err));
    if (!userInfo) res.json(notFoundError(USER_MODEL, req.body._id));
    return res.status(200).json({ success: true, userName: userInfo.name });
  });
});

app.post("/api/users/userInfo", (req, res) => {
  User.findOne({ _id: req.body._id }, (err, userInfo) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!userInfo) return res.json(notFoundError(USER_MODEL, req.body._id));
    return res.status(200).json(userInfoSuccess(userInfo));
  });
});

app.post("/api/skills/upload", (req, res) => {
  const skills = new Skills(req.body);
  skills.save((err, skillInfo) => {
    if (err) return res.json(skillSaveError(err));
    return res.status(200).json(skillSaveSuccess(skillInfo));
  });
});

app.get("/api/skills/list", (req, res) => {
  Skills.find({}, (err, docs) => {
    if (err) return res.json(skillListError(err));
    return res.status(200).json(skillListSuccess(docs));
  });
});

app.post("/api/project/create", (req, res) => {
  const project = new Project(req.body);
  project.save((err, projectInfo) => {
    if (err) return res.json(projectSaveError(err));
    return res.status(200).json(projectSaveSuccess(projectInfo));
  });
});

app.post("/api/study/create", (req, res) => {
  const study = new Study(req.body);
  study.save((err, studyInfo) => {
    if (err) return res.json(studySaveError(err));
    return res.status(200).json(studySaveSuccess(studyInfo));
  });
});

app.get("/api/project/get/list", (req, res) => {
  Project.find({}, (err, docs) => {
    if (err) return res.json(getProjectListError(err));
    return res.status(200).json(getProjectListSuccess(docs));
  });
});

app.get("/api/study/get/list", (req, res) => {
  Study.find({}, (err, docs) => {
    if (err) return res.json(getStudyListError(err));
    return res.status(200).json(getStudyListSuccess(docs));
  });
});

app.post("/api/project/update", (req, res) => {
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

app.post("/api/project/delete", (req, res) => {
  Project.findOneAndDelete({ _id: req.body.id }, (err, deletedProject) => {
    if (err) return res.json(findOneAndUpdateError(PROJECT_MODEL, err));
    if (!deletedProject)
      return res.json(notFoundError(PROJECT_MODEL, req.body.id));

    return res.status(200).json(projectDeleteSuccess(req.body.id));
  });
});

app.post("/api/study/update", (req, res) => {
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

app.post("/api/study/delete", (req, res) => {
  Study.findOneAndDelete({ _id: req.body.id }, (err, deletedStudy) => {
    if (err) return res.json(findOneAndDeleteError(STUDY_MODEL, err));
    if (!deletedStudy) return res.json(notFoundError(STUDY_MODEL, req.body.id));

    return res.status(200).json(studyDeleteSuccess(req.body.id));
  });
});

app.post("/api/project/apply", projectFindOne, (req, res) => {
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

app.post("/api/study/apply", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      { volunteer: study.volunteer.concat(req.body.userId) },
      { new: true },
      (err, updatedStudy) => {
        if (err) return res.json(findOneUpdateError(STUDY_MODEL, err));
        if (!updatedStudy)
          return res.json(notFoundError(STUDY_MODEL, req.body.classId));

        return res.status(200).json(studyUpdateSuccess(updatedStudy));
      }
    );
  });
});

app.post("/api/project/apply/cancel", (req, res) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project) return res.json(notFoundError(PROJECT_MODEL, classId));
    Project.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: project.volunteer.filter((user) => user !== req.body.userId),
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
});

app.post("/api/study/apply/cancel", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: study.volunteer.filter((study) => study !== req.body.userId),
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
});

app.post("/api/project/apply/accept", (req, res) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    Project.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: project.volunteer.filter(
          (userId) => userId !== req.body.userId
        ),
        members: project.members.concat(req.body.userId),
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
});

app.post("/api/project/apply/reject", (req, res) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    Project.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: project.volunteer.filter(
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
});

app.post("/api/study/apply/accept", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: study.volunteer.filter(
          (userId) => userId !== req.body.userId
        ),
        members: study.members.concat(req.body.userId),
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
});

app.post("/api/study/apply/reject", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      {
        volunteer: study.volunteer.filter(
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
});

app.post("/api/project/member/leave", (req, res) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    Project.findOneAndUpdate(
      { _id: req.body.classId },
      {
        members: project.members.filter((member) => member !== req.body.userId),
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
});

app.post("/api/study/member/leave", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      { members: study.members.filter((member) => member !== req.body.userId) },
      { new: true },
      (err, updatedStudy) => {
        console.log(updatedStudy);
        if (err) return res.json(findOneAndUpdateError(STUDY_MODEL, err));
        if (!updatedStudy)
          return res.json(notFoundError(STUDY_MODEL, req.body.classId));

        return res.status(200).json(studyUpdateSuccess(updatedStudy));
      }
    );
  });
});

app.post("/api/project/member/expulsion", (req, res) => {
  Project.findOne({ _id: req.body.classId }, (err, project) => {
    if (err) return res.json(findOneError(PROJECT_MODEL, err));
    if (!project)
      return res.json(notFoundError(PROJECT_MODEL, req.body.classId));

    Project.findOneAndUpdate(
      { _id: req.body.classId },
      {
        members: project.members.filter((userId) => userId !== req.body.userId),
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
});

app.post("/api/study/member/expulsion", (req, res) => {
  Study.findOne({ _id: req.body.classId }, (err, study) => {
    if (err) return res.json(findOneError(STUDY_MODEL, err));
    if (!study) return res.json(notFoundError(STUDY_MODEL, req.body.classId));

    Study.findOneAndUpdate(
      { _id: req.body.classId },
      {
        members: study.members.filter((userId) => userId !== req.body.userId),
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
});

// "POST", "/api/skills/search"
app.post("/api/skills/search", (req, res) => {
  Skills.findOne({ name: req.body.name }, (err, skill) => {
    if (err) res.json(skillSearchError(err));
    if (!skill) {
      return res.json(skillNotFound());
    }
    return res.status(200).json(skillSearchSuccess(skill));
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json(userFindOneError(USER_MODEL, err));
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.json(comparePasswordError(err));
      if (!isMatch) {
        return res.json(isMatchError(err));
      }
      user.generateToken((err, user) => {
        if (err) return res.json(generateTokenError(err));
        res
          .cookie("X_auth", user.token)
          .status(200)
          .json(loginSuccess(user._id));
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  res.status(200).json(authSuccess(req.user));
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
    return res.status(200).send(logoutSuccess(user._id));
  });
});

app.post("/api/users/update/name", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { name: req.body.newName },
    { new: true },
    (err, user) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      res.status(200).json(authSuccess(user));
    }
  );
});

app.post("/api/users/add/tech", auth, (req, res) => {
  const requestSkills = req.body;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { tech: req.user.tech.concat(requestSkills) },
    { new: true },
    (err, user) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!user) return res.json(userNotFound());
      res.status(200).json(authSuccess(user));
    }
  );
});

app.post("/api/users/delete/tech", auth, (req, res) => {
  const requestSkillId = req.body.id;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { tech: req.user.tech.filter((skill) => skill._id !== requestSkillId) },
    { new: true },
    (err, user) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!user) return res.json(userNotFound());
      res.status(200).json(authSuccess(user));
    }
  );
});

app.post("/api/users/add/learn", auth, (req, res) => {
  const requestSkills = req.body;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { learn: req.user.learn.concat(requestSkills) },
    { new: true },
    (err, user) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!user) return res.json(userNotFound());
      res.status(200).json(authSuccess(user));
    }
  );
});

app.post("/api/users/delete/learn", auth, (req, res) => {
  const requestSkillId = req.body.id;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { learn: req.user.learn.filter((skill) => skill._id !== requestSkillId) },
    { new: true },
    (err, user) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!user) return res.json(userNotFound());
      res.status(200).json(authSuccess(user));
    }
  );
});

app.post("/api/users/project/apply/save", (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.userId));

    User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        project: {
          ...user.project,
          apply: user.project.apply.concat(req.body.classId),
        },
      },
      { new: true },
      (err, updatedUser) => {
        if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
        if (!updatedUser)
          return res.json(notFoundError(USER_MODEL, req.body.userId));

        return res.status(200).json(userApplyUpdate(updatedUser.project.apply));
      }
    );
  });
});

app.post("/api/users/study/apply/save", (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.userId));

    User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        study: {
          ...user.study,
          apply: user.study.apply.concat(req.body.classId),
        },
      },
      { new: true },
      (err, updatedUser) => {
        if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
        if (!updatedUser)
          return res.json(notFoundError(USER_MODEL, req.body.userId));

        return res.status(200).json(userApplyUpdate(updatedUser.study.apply));
      }
    );
  });
});

app.post("/api/users/project/apply/remove", (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.userId));

    User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        project: {
          ...user.project,
          apply: user.project.apply.filter(
            (classId) => classId !== req.body.classId
          ),
        },
      },
      { new: true },
      (err, updatedUser) => {
        if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
        if (!updatedUser)
          return res.json(notFoundError(USER_MODEL, req.body.userId));

        return res.status(200).json(userApplyUpdate(updatedUser.project.apply));
      }
    );
  });
});

app.post("/api/users/study/apply/remove", (req, res) => {
  User.findOne({ _id: req.body.userId }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(notFoundError(USER_MODEL, req.body.userId));

    User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        study: {
          ...user.study,
          apply: user.study.apply.filter(
            (classId) => classId !== req.body.classId
          ),
        },
      },
      { new: true },
      (err, updatedUser) => {
        if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
        if (!updatedUser)
          return res.json(notFoundError(USER_MODEL, req.body.userId));

        return res.status(200).json(userApplyUpdate(updatedUser.study.apply));
      }
    );
  });
});

app.post("/api/skills/add/technitianUsers", auth, (req, res) => {
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

app.post("/api/skills/delete/technitianUsers", auth, (req, res) => {
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

app.post("/api/skills/add/learningUsers", auth, (req, res) => {
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

app.post("/api/skills/delete/learningUsers", auth, (req, res) => {
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

app.post("/api/users/update/password", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!user) return res.json(userNotFound());

    user.comparePassword(req.body.currentPassword, (err, isMatch) => {
      if (err) return comparePasswordError(err);
      if (!isMatch) return res.json(isMatchError(err));

      user.encryption(req.body.newPassword, (err, newPassword) => {
        if (err) return res.json(encryptionError(err));

        User.findOneAndUpdate(
          { _id: user._id },
          { password: newPassword },
          (err, user) => {
            if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
            if (!user) return res.json(userNotFound());

            res.status(200).json(passwordUpdateSuccess());
          }
        );
      });
    });
  });
});

app.get("/api/hello", (req, res) => {
  res.send("client - server");
});

app.get("/", (req, res) => res.send("Hello express"));

app.listen(PORT, () => console.log(`Express app listening on Port ${PORT}`));

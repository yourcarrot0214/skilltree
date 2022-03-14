const express = require("express");
const app = express();
const router = express.Router();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const { User } = require("../models/User.js");
const { auth } = require("../middleware/auth.js");
const { leaderFindOne, userFindOne } = require("../middleware/userFindOne.js");

const { USER_MODEL } = require("../config/types.js");

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
  userMemberUpdate,
} = require("../function/userResponse.js");

const {
  findOneError,
  notFoundError,
  findOneAndUpdateError,
  findOneAndDeleteError,
} = require("../function/errorResponse.js");

router.post("/signup", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json(saveError(USER_MODEL, err));
    return res.status(200).json(signupSuccess(userInfo));
  });
});

router.get("/name/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, userInfo) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!userInfo) return res.json(notFoundError(USER_MODEL, req.body._id));
    return res.status(200).json({ success: true, userName: userInfo.name });
  });
});

router.get("/info/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, userInfo) => {
    if (err) return res.json(findOneError(USER_MODEL, err));
    if (!userInfo) return res.json(notFoundError(USER_MODEL, req.body._id));
    return res.status(200).json(userInfoSuccess(userInfo));
  });
});

router.post("/login", (req, res) => {
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

router.get("/auth", auth, (req, res) => {
  res.status(200).json(authSuccess(req.user));
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
    return res.status(200).send(logoutSuccess(user._id));
  });
});

router.patch("/name", auth, (req, res) => {
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

router.post("/tech", auth, (req, res) => {
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

router.delete("/tech/:id", auth, (req, res) => {
  const requestSkillId = req.params.id;

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

router.post("/learn", auth, (req, res) => {
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

router.delete("/learn/:id", auth, (req, res) => {
  const requestSkillId = req.params.id;

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

router.patch("/project/apply/save", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      project: {
        ...req.user.project,
        apply: req.user.project.apply.concat(req.body.classId),
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

router.patch("/study/apply/save", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      study: {
        ...req.user.study,
        apply: req.user.study.apply.concat(req.body.classId),
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

router.patch("/project/apply/remove", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      project: {
        ...req.user.project,
        apply: req.user.project.apply.filter(
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

router.patch("/study/apply/remove", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      study: {
        ...req.user.study,
        apply: req.user.study.apply.filter(
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

router.patch("/project/member/save", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      project: {
        ...req.user.project,
        apply: req.user.project.apply.filter(
          (classId) => classId !== req.body.classId
        ),
        member: req.user.project.member.concat(req.body.classId),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.body.userId));

      return res.status(200).json(userMemberUpdate(updatedUser.project));
    }
  );
});

router.patch("/project/member/remove", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      project: {
        ...req.user.project,
        member: req.user.project.member.filter(
          (classId) => classId !== req.body.classId
        ),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.body.userId));

      return res.status(200).json(userMemberUpdate(updatedUser.project.member));
    }
  );
});

router.patch("/study/member/save", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      study: {
        ...req.user.study,
        apply: req.user.study.apply.filter(
          (classId) => classId !== req.body.classId
        ),
        member: req.user.study.member.concat(req.body.classId),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.body.userId));

      return res.status(200).json(userMemberUpdate(updatedUser.study));
    }
  );
});

router.patch("/study/member/remove", userFindOne, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      study: {
        ...req.user.study,
        member: req.user.study.member.filter(
          (classId) => classId !== req.body.classId
        ),
      },
    },
    { new: true },
    (err, updatedUser) => {
      if (err) return res.json(findOneAndUpdateError(USER_MODEL, err));
      if (!updatedUser)
        return res.json(notFoundError(USER_MODEL, req.body.userId));

      return res.status(200).json(userMemberUpdate(updatedUser.study.member));
    }
  );
});

router.patch("/password/update", auth, (req, res) => {
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

module.exports = router;

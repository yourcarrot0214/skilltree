const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 5000;
const CONFIG = require("./config/key.js");

const { User } = require("./models/User.js");
const { Skills } = require("./models/Skills");
const { auth } = require("./middleware/auth.js");
const { SKILLS_MODEL, USER_MODEL } = require("./config/types.js");

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
} = require("./function/userResponse.js");

const {
  skillSaveError,
  skillSaveSuccess,
  skillListError,
  skillListSuccess,
  skillSearchError,
  skillNotFound,
  skillSearchSuccess,
  findOneError,
  findOneAndUpdateError,
  skillNotFoundAfterUpdate,
  skillUserUpdateSuccess,
} = require("./function/skillsResponse.js");

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

  Skills.findOne({ _id: requestSkillId }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        technitianUsers: skill.technitianUsers.filter(
          (user) => user._id !== req.user._id
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

  Skills.findOne({ _id: requestSkillId }, (err, skill) => {
    if (err) return res.json(findOneError(SKILLS_MODEL, err));
    if (!skill) return res.json(skillNotFound());

    Skills.findOneAndUpdate(
      { _id: skill._id },
      {
        learningUsers: skill.learningUsers.filter(
          (user) => user._id !== req.user._id
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

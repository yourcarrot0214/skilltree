const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 5000;
const CONFIG = require("./config/key.js");

const { Skills } = require("./models/Skills");
const { auth } = require("./middleware/auth.js");
const { SKILLS_MODEL } = require("./config/types.js");

const {
  findOneAndUpdateError,
  findOneAndDeleteError,
  notFoundError,
  findOneError,
} = require("./function/errorResponse");

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

app.use(express.json());
app.use(cookieParser());

const usersRouter = require("./routes/usersRouter.js");
app.use("/api/users", usersRouter);

const projectRouter = require("./routes/projectRouter.js");
app.use("/api/project", projectRouter);

const studyRouter = require("./routes/studyRouter.js");
app.use("/api/study", studyRouter);

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

app.get("/api/hello", (req, res) => {
  res.send("client - server");
});

app.get("/", (req, res) => res.send("Hello express"));

app.listen(PORT, () => console.log(`Express app listening on Port ${PORT}`));

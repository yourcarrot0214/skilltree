const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 5000;
const CONFIG = require("./config/key.js");

const { User } = require("./models/User.js");
const { Skills } = require("./models/Skills");
const { auth } = require("./middleware/auth.js");

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
    if (err) return res.json({ signupSuccess: false, err });
    return res.status(200).json({ signupSuccess: true, userInfo });
  });
});

app.post("/api/skills/upload", (req, res) => {
  const skills = new Skills(req.body);
  skills.save((err, skillInfo) => {
    if (err) return res.json({ skillUploadSuccess: false, err });
    return res.status(200).json({ skillUploadSuccess: true, skillInfo });
  });
});

app.get("/api/skills/list", (req, res) => {
  Skills.find({}, (err, docs) => {
    if (err) return res.json({ listLoadSuccess: false, err });
    return res.status(200).json({ listLoadSuccess: true, docs });
  });
});

// "POST", "/api/skills/search"
app.post("/api/skills/search", (req, res) => {
  Skills.findOne({ name: req.body.name }, (err, skill) => {
    if (err) res.json({ skillSearchSuccess: false, message: `Err : ${err}` });
    if (!skill) {
      return res.json({
        skillSearchSuccess: false,
        message: "Skill Not Found.",
      });
    }
    return res.status(200).json({ skillSearchSuccess: true, skill });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "User Not Found.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "passwords don't match.",
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("X_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

app.get("/api/users/auth", auth, (req, res) => {
  console.log("auth response");
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
    tech: req.user.tech,
    learn: req.user.learn,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ logout: false, message: "Logout Failed." });
    return res
      .status(200)
      .send({ logout: true, userId: user._id, message: "Logout Success." });
  });
});

app.post("/api/users/update/name", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { name: req.body.newName },
    (err, user) => {
      if (err)
        return res.json({
          updateSuccess: false,
          message: "user name update failed.",
          err,
        });
      User.findOne({ _id: user._id }, (err, user) => {
        if (err) return res.json({ updateSuccess: false, message: err });
        if (!user)
          return res.json({
            updateSuccess: false,
            message: "update user not found.",
          });
        res.status(200).json(user);
      });
    }
  );
});

app.post("/api/users/update/password", auth, (req, res) => {
  User.findOne({ _id: req.user._id }, (err, user) => {
    if (err)
      return res.json({
        passwordUpdate: false,
        message: "비밀번호 업데이트 중 에러 발생",
        err,
      });
    if (!user)
      return res.json({
        passwordUpdate: false,
        message: "비밀번호를 업데이트할 유저를 찾을 수 없습니다.",
      });

    user.comparePassword(req.body.currentPassword, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "passwords don't match.",
        });
      }

      user.encryption(req.body.newPassword, (err, newPassword) => {
        if (err)
          return res.json({
            passwordEncryption: false,
            message: "비밀번호 암호화 중 에러 발생",
            err,
          });

        User.findOneAndUpdate(
          { _id: user._id },
          { password: newPassword },
          (err, user) => {
            if (err)
              return res.json({
                passwordUpdate: false,
                message: "비밀번호 업데이트 중 에러발생",
                err,
              });
            if (!user)
              return res.json({
                passwordUpdate: false,
                message: "비밀번호를 업데이트할 유저를 찾을 수 없습니다.",
              });
            res.status(200).json({
              passwordUpdate: true,
              message: "비밀번호가 업데이트 되었습니다.",
            });
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

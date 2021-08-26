const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const CONFIG = require("./config/key.js");
const helmet = require("helmet");

app.disable("x-powered-by");

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "default-src": ["'self'", "'unsafe-inline'", "*.herokuapp.com"],
      "script-src": ["'self'", "'unsafe-inline'", "*.herokuapp.com"],
      "style-src": ["'self'", "'unsafe-inline'", "*.herokuapp.com"],
      "font-src": ["'self'", "'unsafe-inline'", "*.herokuapp.com"],
    },
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const usersRouter = require("./routes/usersRouter.js");
app.use("/api/users", usersRouter);

const skillsRouter = require("./routes/skillsRouter.js");
app.use("/api/skills", skillsRouter);

const projectRouter = require("./routes/projectRouter.js");
app.use("/api/project", projectRouter);

const studyRouter = require("./routes/studyRouter.js");
app.use("/api/study", studyRouter);

const mongoose = require("mongoose");
const connect = mongoose
  .connect(CONFIG.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected ...."))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Express app listening on Port ${PORT}`));

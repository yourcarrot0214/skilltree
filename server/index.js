const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const PORT = 5000;
const CONFIG = require("./config/key.js");

app.use(express.json());
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
mongoose
  .connect(CONFIG.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected ...."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello express"));

app.listen(PORT, () => console.log(`Express app listening on Port ${PORT}`));

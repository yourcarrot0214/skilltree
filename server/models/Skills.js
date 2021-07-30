const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  name: {
    type: String,
    unique: 1,
  },
  technitianUsers: {
    type: Array,
  },
  learningUsers: {
    type: Array,
  },
});

const Skills = mongoose.model("Skills", skillsSchema);

module.exports = { Skills };

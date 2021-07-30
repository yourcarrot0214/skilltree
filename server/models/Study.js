const mongoose = require("mongoose");

const studySchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  skills: {
    type: Array,
  },
  members: {
    type: Array,
    default: [],
  },
  leader: {
    type: String,
  },
  volunteer: {
    type: Array,
    default: [],
  },
  status: {
    type: Boolean,
    default: false,
  },
  personnel: {
    type: Number,
  },
});

const Study = mongoose.model("Study", studySchema);

module.exports = { Study };

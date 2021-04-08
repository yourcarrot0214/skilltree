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

/*
  Skills Model
    - 기술명, 해당 기술 보유자, 해당 기술 학습자 정보
    - 사전 작성하여 server에서 초기화.
      > AdminPage 에서 router 작성 및 기능 구현.
*/

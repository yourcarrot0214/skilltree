const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
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
  },
  leader: {
    type: String,
  },
  volunteer: {
    type: Array,
  },
  status: {
    type: Boolean,
    default: false,
  },
  personnel: {
    type: Number,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };

/*
  Project Model
    - Project 생성시 정보를 보관한다.

  Schema
    - title : project title. String
    - description : 프로젝트 설명
    - skills : 프로젝트에서 사용하는 스킬 목록. Array
    - members : 프로젝트에 참가중인 유저 목록. Array
    - leader : 프로젝트를 개설한 유저. String => user._id
    - volunteer : 프로젝트에 지원한 유저 목록. Array
    - status : 프로젝트 상태. true = 모집중, false = 진행중

*/

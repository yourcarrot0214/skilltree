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

/*
  Study Model
    - Study 생성시 정보를 보관한다.

  Schema
    - title : study title. String
    - description : 스터디 설명
    - skills : 스터디에서 사용하는 스킬 목록. Array
    - members : 스터디에 참가중인 유저 목록. Array
    - leader : 스터디를 개설한 유저. Object
    - volunteer : 스터디에 지원한 유저 목록. Array
    - status : 스터디 상태. true = 모집중, false = 진행중

*/

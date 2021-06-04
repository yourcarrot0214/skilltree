const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 8,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  tech: {
    type: Array,
    default: [],
  },
  learn: {
    type: Array,
    default: [],
  },
  project: {
    type: Object,
    default: {
      apply: {
        type: Array,
        default: [],
      },
      member: {
        type: Array,
        default: [],
      },
      leader: {
        type: Array,
        default: [],
      },
    },
  },
  study: {
    type: Object,
    default: {
      apply: {
        type: Array,
        default: [],
      },
      member: {
        type: Array,
        default: [],
      },
      leader: {
        type: Array,
        default: [],
      },
    },
  },
});

userSchema.pre("save", function (next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.encryption = function (newPassword, cb) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return cb(err);
    bcrypt.hash(newPassword, salt, function (err, hash) {
      if (err) return cb(err);
      newPassword = hash;
      cb(null, newPassword);
    });
  });
};

userSchema.methods.comparePassword = function (plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "secretToken");
  user.token = token;
  user.save((err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, "secretToken", function (err, decoded) {
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };

/*
  Models
    - models는 schema 정의에서 컴파일된 생성자 입니다.
    - models는 기본 MongoDB 데이터베이스에서 문서를 만들고 읽는 역할을 합니다.

  Schema
    - Mongoose의 모든 것은 Schema로 시작됩니다.
    - 각 Schema는 MongoDB 컬렉션에 매핑되고 해당 컬렉션 내의 문서 모양을 정의합니다.
*/

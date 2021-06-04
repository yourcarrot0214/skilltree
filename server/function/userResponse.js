// register
const saveError = (model, err) => ({
  model: model,
  success: false,
  message: `${model} save() 에러`,
  err: err,
});

const signupSuccess = (responseData) => ({
  success: true,
  message: "회원가입에 성공했습니다.",
  responseData,
});

const userFindOneError = (model, err) => ({
  model: model,
  success: false,
  message: `${model} findOne() 에러`,
  err: err,
});

const userNotFound = () => ({
  success: false,
  message: "해당 유저를 찾을 수 없습니다.",
});

const comparePasswordError = (err) => ({
  success: false,
  message: "comparePassword() 에러",
  err: err,
});

const isMatchError = (err) => ({
  success: false,
  message: "패스워드가 일치하지 않습니다.",
  err: err,
});

const generateTokenError = (err) => ({
  success: false,
  message: "generateToken() 에러",
  err: err,
});

const loginSuccess = (responseData) => ({
  success: true,
  message: "로그인 및 토큰 부여에 성공했습니다.",
  userId: responseData,
});

const logoutSuccess = (responseData) => ({
  success: true,
  message: "로그아웃 및 토큰 초기화에 성공했습니다.",
  userId: responseData,
});

const authSuccess = (requestUserData) => ({
  _id: requestUserData._id,
  isAdmin: requestUserData.role === 0 ? false : true,
  isAuth: true,
  email: requestUserData.email,
  name: requestUserData.name,
  role: requestUserData.role,
  image: requestUserData.image,
  tech: requestUserData.tech,
  learn: requestUserData.learn,
  project: requestUserData.project,
  study: requestUserData.study,
});

const encryptionError = (err) => ({
  success: false,
  message: "비밀번호 암호화에 실패했습니다.",
  err: err,
});

const passwordUpdateSuccess = () => ({
  success: true,
  message: "비밀번호가 업데이트 되었습니다.",
});

module.exports = {
  saveError,
  signupSuccess,
  userFindOneError,
  userNotFound,
  comparePasswordError,
  isMatchError,
  generateTokenError,
  loginSuccess,
  logoutSuccess,
  authSuccess,
  encryptionError,
  passwordUpdateSuccess,
};

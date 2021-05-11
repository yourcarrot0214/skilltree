// register
const saveError = (err) => ({
  success: false,
  message: "회원가입진행 중 에러가 발생했습니다.",
  err,
});

const saveSuccess = (responseData) => ({
  success: true,
  message: "회원가입에 성공했습니다.",
  responseData,
});

module.exports = { saveError, saveSuccess };

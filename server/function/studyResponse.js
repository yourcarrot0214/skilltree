const studySaveError = (err) => ({
  success: false,
  message: "신규 스터디 등록 중 에러가 발생했습니다.",
  err,
});

const studySaveSuccess = (responseData) => ({
  success: true,
  message: "신규 스터디 등록에 성공했습니다.",
  responseData,
});

const getStudyListError = (err) => ({
  success: false,
  message: "DB 스터디 정보를 얻는 중 에러가 발생했습니다.",
  err,
});

const getStudyListSuccess = (responseData) => ({
  success: true,
  message: "DB 스터디 정보를 얻는데 성공했습니다.",
  docs: responseData,
});

const studyUpdateSuccess = (responseData) => ({
  success: true,
  message: "Study 정보 업데이트에 성공했습니다.",
  studyInfo: responseData,
});

module.exports = {
  studySaveError,
  studySaveSuccess,
  getStudyListError,
  getStudyListSuccess,
  studyUpdateSuccess,
};

const projectSaveError = (err) => ({
  success: false,
  message: "신규 프로젝트 등록 중 에러가 발생했습니다.",
  err,
});

const projectSaveSuccess = (responseData) => ({
  success: true,
  message: "신규 프로젝트 등록에 성공했습니다.",
  responseData,
});

const getProjectListError = (err) => ({
  success: false,
  message: "DB 프로젝트 정보를 얻는 중 에러가 발생했습니다.",
  err,
});

const getProjectListSuccess = (respnoseData) => ({
  success: true,
  message: "DB 프로젝트 정보를 얻는데 성공했습니다.",
  docs: response.data,
});

module.exports = {
  projectSaveError,
  projectSaveSuccess,
  getProjectListError,
  getProjectListSuccess,
};

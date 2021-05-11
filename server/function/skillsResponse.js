const skillSaveError = (err) => ({
  success: false,
  message: "신규 스킬 등록 중 에러가 발생했습니다.",
  err,
});

const skillSaveSuccess = (responseData) => ({
  success: true,
  message: "신규 스킬 등록에 성공했습니다.",
  responseData,
});

const skillListError = (err) => ({
  success: false,
  message: "DB 스킬리스트 정보를 얻는 중 에러가 발생했습니다.",
  err,
});

const skillListSuccess = (responseData) => ({
  success: true,
  message: "DB 스킬리스트 정보를 얻는데 성공했습니다.",
  docs: responseData,
});

const skillSearchError = (err) => ({
  success: false,
  message: "DB 스킬 검색 중 에러가 발생했습니다.",
  err,
});

const skillNotFound = () => ({
  success: false,
  message: "DB에 해당 스킬이 없습니다.",
});

const skillSearchSuccess = (responseData) => ({
  success: true,
  message: "DB 스킬 검색에 성공했습니다.",
  responseData,
});

const findOneError = (model, err) => ({
  model: model,
  success: false,
  message: `${model} findOne() 중 에러가 발생했습니다.`,
  err,
});

const findOneAndUpdateError = (model, err) => ({
  model: model,
  success: false,
  message: `${model} findOneAndUpdate() 중 에러가 발생했습니다.`,
  err,
});

const skillNotFoundAfterUpdate = () => ({
  success: false,
  message: "업데이트한 스킬을 찾을 수 없습니다.",
});

const addTechnitianUsersSuccess = (responseData) => ({
  success: true,
  message: "스킬 정보 업데이트에 성공했습니다.",
  responseData,
});

module.exports = {
  skillSaveError,
  skillSaveSuccess,
  skillListError,
  skillListSuccess,
  skillSearchError,
  skillNotFound,
  skillSearchSuccess,
  findOneError,
  findOneAndUpdateError,
  skillNotFoundAfterUpdate,
  addTechnitianUsersSuccess,
};

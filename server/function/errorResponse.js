const findOneAndUpdateError = (model, err) => ({
  success: false,
  message: `${model}.findOneAndUpdate err`,
  err: err,
});

const notFoundError = (model, id) => ({
  success: false,
  message: `해당 ${model}을 찾을 수 없습니다.`,
  id: id,
});

const findOneError = (model, err) => ({
  success: false,
  message: `${model}.findOne err`,
  err: err,
});

module.exports = {
  findOneAndUpdateError,
  notFoundError,
  findOneError,
};

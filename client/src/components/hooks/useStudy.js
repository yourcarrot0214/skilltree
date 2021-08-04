import { useSelector, shallowEqual } from "react-redux";

const useStudy = () => {
  const studyState = useSelector((state) => state.study, shallowEqual);

  studyState.leader = function (userId) {
    return studyState.filter((study) => study.leader === userId);
  };

  studyState.findStudy = function (studyIdList = []) {
    return studyIdList.map((studyId) =>
      studyState.find((study) => study._id === studyId)
    );
  };

  studyState.searchResult = function (skillIdList) {
    return skillIdList.reduce((acc, cur) => {
      return acc.filter((study) =>
        study.skills.find((skill) => skill._id === cur)
      );
    }, studyState);
  };

  studyState.relatedStudy = function (skillId) {
    return studyState.filter((study) => {
      return study.skills.find((skill) => skill._id === skillId);
    });
  };

  return studyState;
};

export default useStudy;

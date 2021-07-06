import { useSelector, shallowEqual } from "react-redux";

const useStudy = () => {
  const studyState = useSelector((state) => state.study, shallowEqual);

  studyState.leader = function (userId) {
    return studyState.filter((study) => study.leader === userId);
  };

  studyState.findStudy = function (studyIdList) {
    return studyIdList.map((studyId) =>
      studyState.find((study) => study._id === studyId)
    );
  };

  return studyState;
};

export default useStudy;

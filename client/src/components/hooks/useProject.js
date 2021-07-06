import { useSelector, shallowEqual } from "react-redux";

const useProject = () => {
  const projectState = useSelector((state) => state.project, shallowEqual);

  projectState.leader = function (userId) {
    return projectState.filter((project) => project.leader === userId);
  };

  projectState.findProject = function (projectIdList) {
    return projectIdList.map((projectId) =>
      projectState.find((project) => project._id === projectId)
    );
  };

  return projectState;
};

export default useProject;

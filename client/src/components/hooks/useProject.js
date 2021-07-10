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

  projectState.searchResult = function (skillIdList) {
    return skillIdList.reduce((acc, cur) => {
      return acc.filter((project) =>
        project.skills.find((skill) => skill._id === cur)
      );
    }, projectState);
  };

  projectState.relatedProject = function (skillIdList) {
    return skillIdList.map((skillId) => {
      return projectState.filter((project) => {
        return project.skills.find((skill) => skill._id === skillId);
      });
    });
  };
  return projectState;
};

export default useProject;

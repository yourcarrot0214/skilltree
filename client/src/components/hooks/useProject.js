import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getProjectList } from "../../_actions/project_action.js";

const useProject = () => {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state.project, shallowEqual);

  projectState.leader = function (userId) {
    return projectState.filter((project) => project.leader === userId);
  };

  projectState.findProject = function (projectIdList = []) {
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

  projectState.relatedProject = function (skillId) {
    return projectState.filter((project) => {
      return project.skills.find((skill) => skill._id === skillId);
    });
  };

  useEffect(() => {
    getProjectList().then((result) => dispatch(result));
  }, []);

  const projectInfo = projectState ?? [];
  return projectInfo;
};

export default useProject;

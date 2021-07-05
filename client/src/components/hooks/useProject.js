import { useSelector, shallowEqual } from "react-redux";

const useProject = (userId) => {
  const projectList = useSelector((state) => state.project, shallowEqual);
};

export default useProject;

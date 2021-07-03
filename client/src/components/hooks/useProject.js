import { useSelector, shallowEqual } from "react-redux";

const useProject = () => {
  const projectList = useSelector((state) => state.project, shallowEqual);
  const searchProject = "";
};

export default useProject;

/*
  인자로 전달받은 id값을 통해 state에서 일치하는 정보의 project를 리턴.
*/

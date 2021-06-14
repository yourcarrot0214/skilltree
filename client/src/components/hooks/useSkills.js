import { useSelector, shallowEqual } from "react-redux";

const useSkills = () => {
  const skills = useSelector((state) => state.skills, shallowEqual);

  skills.selectedSkills = function () {
    return this.filter((skill) => skill.selected);
  };

  skills.unSelectedSkills = function () {
    return this.filter((skill) => !skill.selected);
  };

  return skills;
};

export default useSkills;

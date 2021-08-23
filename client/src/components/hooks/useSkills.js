import { useSelector, shallowEqual } from "react-redux";

const useSkills = () => {
  const skillsState = useSelector((state) => state.skills, shallowEqual);

  skillsState.selectedSkills = function () {
    return this.filter((skill) => skill.selected);
  };

  skillsState.unSelectedSkills = function () {
    return this.filter((skill) => !skill.selected);
  };

  skillsState.relatedUsers = function (selectedSkills) {
    return selectedSkills.map((skill) => ({
      name: skill.name,
      technitianUsers: skill.technitianUsers.length,
      learningUsers: skill.learningUsers.length,
    }));
  };

  skillsState.findSkillById = function (skillId) {
    return this.find((skill) => skill._id === skillId);
  };

  const skills = skillsState ?? [];

  return skills;
};

export default useSkills;

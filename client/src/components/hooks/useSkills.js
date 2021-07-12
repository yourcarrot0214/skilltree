import { useSelector, shallowEqual } from "react-redux";

const useSkills = () => {
  const skills = useSelector((state) => state.skills, shallowEqual);

  skills.selectedSkills = function () {
    return this.filter((skill) => skill.selected);
  };

  skills.unSelectedSkills = function () {
    return this.filter((skill) => !skill.selected);
  };

  skills.relatedUsers = function (selectedSkills) {
    return selectedSkills.map((skill) => ({
      name: skill.name,
      technitianUsers: skill.technitianUsers.length,
      learningUsers: skill.learningUsers.length,
    }));
  };

  skills.findSkillById = function (skillId) {
    return skills.find((skill) => skill._id === skillId);
  };

  return skills;
};

export default useSkills;

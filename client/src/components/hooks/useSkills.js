import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSkillsDB } from "../../_actions/skill_action.js";

const useSkills = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    getSkillsDB().then((result) => dispatch(result));
  }, [dispatch]);

  const skills = skillsState ?? [];

  return skills;
};

export default useSkills;

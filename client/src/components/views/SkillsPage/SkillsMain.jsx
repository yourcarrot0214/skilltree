import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chooseOneSelected } from "../../../_actions/skill_action";

import SkillSearchBar from "../../common/SkillSearchBar.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

const SkillsMain = () => {
  const dispatch = useDispatch();
  const [skillId, setSkillId] = useState("");
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const selectedSkill = skillsState.selectedSkills();
  const relatedProject = projectState.relatedProject(skillId);
  const relatedStudy = studyState.relatedStudy(skillId);
  console.log(selectedSkill);
  console.log(relatedProject);
  console.log(relatedStudy);

  const onClickFunction = (e) => {
    dispatch(chooseOneSelected(e.target.id));
    setSkillId(e.target.id);
  };

  return (
    <>
      <h3>Skills Main Page</h3>
      <p>Skills page</p>
      <SkillSearchBar selected={true} onClickFunction={onClickFunction} />
    </>
  );
};

export default SkillsMain;

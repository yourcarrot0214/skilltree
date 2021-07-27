import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chooseOneSelected } from "../../../_actions/skill_action";
import { SkillsMainContainer } from "./styles/styled.js";

import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import SkillInfoSection from "./SkillInfoSection.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

const SkillsMain = () => {
  const dispatch = useDispatch();
  const [skillId, setSkillId] = useState("");
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const relatedProject = projectState.relatedProject(skillId);
  const relatedStudy = studyState.relatedStudy(skillId);
  const relatedUsers = skillsState.findSkillById(skillId);

  const onClickFunction = (e) => {
    dispatch(chooseOneSelected(e.target.id));
    setSkillId((prev) => (e.target.id === prev ? "" : e.target.id));
  };

  return (
    <SkillsMainContainer>
      <SkillSearchBar
        selected={true}
        onClickFunction={onClickFunction}
        setSkillId={setSkillId}
        chooseOneSelected
      />
      <SkillInfoSection
        relatedUsers={relatedUsers}
        relatedProject={relatedProject}
        relatedStudy={relatedStudy}
      />
    </SkillsMainContainer>
  );
};

export default SkillsMain;

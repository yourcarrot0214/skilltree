import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseOneSelected, getSkillsDB } from "../../../_actions/skill_action";
import { SkillsMainContainer } from "./styles/styled.js";

import SkillInfoSection from "./SkillInfoSection.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

import TagContainer from "../../common/TagContainer";
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";
import useSearchList from "../../hooks/useSearchList";

const SkillsMain = () => {
  const dispatch = useDispatch();
  const [skillId, setSkillId] = useState("");
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skillSearchList = useSearchList(skillName);
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const relatedProject = projectState.relatedProject(skillId);
  const relatedStudy = studyState.relatedStudy(skillId);
  const relatedUsers = skillsState.findSkillById(skillId);

  const onClickFunction = (e) => {
    dispatch(chooseOneSelected(e.target.id));
    setSkillId((prev) => (e.target.id === prev ? "" : e.target.id));
    setSkillName("");
  };

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const onSkillSearch = (e) => {
    e.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;
    dispatch(chooseOneSelected(skillSearchResult._id));
    setSkillId((prev) =>
      skillSearchResult._id === prev ? "" : skillSearchResult._id
    );
    setSkillName("");
  };

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

  return (
    <SkillsMainContainer>
      <SearchBar
        onChangeValue={onChangeValue}
        onSkillSearch={onSkillSearch}
        skillName={skillName}
      />
      {
        <TagContainer
          skills={skillSearchList}
          onClickFunction={onClickFunction}
        />
      }
      <SkillInfoSection
        relatedUsers={relatedUsers}
        relatedProject={relatedProject}
        relatedStudy={relatedStudy}
      />
    </SkillsMainContainer>
  );
};

export default withRouter(SkillsMain);

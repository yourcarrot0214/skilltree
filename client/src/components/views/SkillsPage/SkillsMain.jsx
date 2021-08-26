import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseOneSelected } from "../../../_actions/skill_action";
import { SkillsMainContainer } from "./styles/styled.js";

import SkillInfoSection from "./SkillInfoSection.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

import TagContainer from "../../common/TagContainer";
import Tag from "../../common/Tag";
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";

const SkillsMain = () => {
  const dispatch = useDispatch();
  const [skillId, setSkillId] = useState("");
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const relatedProject = projectState.relatedProject(skillId);
  const relatedStudy = studyState.relatedStudy(skillId);
  const relatedUsers = skillsState.findSkillById(skillId);

  const selectedSkills = skillsState.selectedSkills();
  const unSelectedSkills = skillsState.unSelectedSkills();

  const onClickFunction = (e) => {
    dispatch(chooseOneSelected(e.target.id));
    setSkillId((prev) => (e.target.id === prev ? "" : e.target.id));
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

  return (
    <SkillsMainContainer>
      <SearchBar
        onChangeValue={onChangeValue}
        onSkillSearch={onSkillSearch}
        skillName={skillName}
      />
      {skillSearchResult ? (
        <Tag
          skillInfo={skillSearchResult}
          key={skillSearchResult.key}
          onClickFunction={onClickFunction}
          selected={skillSearchResult.selected}
        />
      ) : null}
      {/* 검색 결과 출력 */}
      <TagContainer
        selected
        skills={selectedSkills}
        onClickFunction={onClickFunction}
      />
      {/* 스킬 목록 출력 */}
      <TagContainer
        skills={unSelectedSkills}
        onClickFunction={onClickFunction}
      />
      <SkillInfoSection
        relatedUsers={relatedUsers}
        relatedProject={relatedProject}
        relatedStudy={relatedStudy}
      />
    </SkillsMainContainer>
  );
};

export default withRouter(SkillsMain);

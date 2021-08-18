import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectedSkill } from "../../../_actions/skill_action";
import { withRouter } from "react-router-dom";
import useProject from "../../hooks/useProject.js";
import DetailPage from "../../common/DetailPage.jsx";
import useSkills from "../../hooks/useSkills.js";
import useUserData from "../../hooks/useUserData.js";
import { ProjectMainContainer } from "./styles/styled.js";

import TagContainer from "../../common/TagContainer";
import Tag from "../../common/Tag";
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";

const ProjectMain = () => {
  const dispatch = useDispatch();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skills = useSkills();
  const projectState = useProject();
  const selectedSkills = skills.selectedSkills();
  const unSelectedSkills = skills.unSelectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const projectSearchResult = projectState.searchResult(skillIdList);
  const userData = useUserData();

  const onSkillSearch = (e) => {
    e.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;

    dispatch(selectedSkill(skillSearchResult._id));
    setSkillName("");
  };

  const onClickFunction = (e) => {
    dispatch(selectedSkill(e.target.id));
    setSkillName("");
  };

  const onChangeValue = (e) => {
    setSkillName(e.currentTarget.value);
  };

  return (
    <ProjectMainContainer>
      <h2>스킬을 통해 프로젝트를 생성하거나 참가하세요!</h2>
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
      <DetailPage
        location='Project'
        classList={projectSearchResult}
        userData={userData}
      />
    </ProjectMainContainer>
  );
};

export default withRouter(ProjectMain);

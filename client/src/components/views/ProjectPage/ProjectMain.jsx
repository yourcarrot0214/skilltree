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
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";
import useSearchList from "../../hooks/useSearchList";

const ProjectMain = () => {
  const dispatch = useDispatch();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skills = useSkills();
  const projectState = useProject();
  const selectedSkills = skills.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const projectSearchResult = projectState.searchResult(skillIdList);
  const userData = useUserData();
  const skillSearchList = useSearchList(skillName);

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
      <TagContainer
        skills={skillSearchList}
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

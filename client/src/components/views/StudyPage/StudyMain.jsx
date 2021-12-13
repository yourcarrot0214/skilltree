import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectedSkill } from "../../../_actions/skill_action";
import { withRouter } from "react-router-dom";
import { StudyMainContainer } from "./styles/styled.js";
import useStudy from "../../hooks/useStudy.js";
import DetailPage from "../../common/DetailPage.jsx";
import useSkills from "../../hooks/useSkills.js";
import useUserData from "../../hooks/useUserData.js";

import TagContainer from "../../common/TagContainer";
import SearchBar from "../../common/SearchBar";
import useSearchResult from "../../hooks/useSearchResult";
import useSearchList from "../../hooks/useSearchList";
import { getStudyList } from "../../../_actions/study_action";

const StudyMain = () => {
  const dispatch = useDispatch();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skills = useSkills();
  const studyState = useStudy();
  const selectedSkills = skills.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const studySearchResult = studyState.searchResult(skillIdList);
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

  useEffect(() => {
    dispatch(getStudyList());
  }, [dispatch]);

  return (
    <StudyMainContainer>
      <h2>스킬을 통해 스터디를 생성하거나 참가하세요!</h2>
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
        location="Study"
        classList={studySearchResult}
        userData={userData}
      />
    </StudyMainContainer>
  );
};

export default withRouter(StudyMain);

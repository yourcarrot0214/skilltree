import React from "react";
import { withRouter } from "react-router-dom";
import { StudyMainContainer } from "./styles/styled.js";
import useStudy from "../../hooks/useStudy.js";
import DetailPage from "../../common/DetailPage.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import useSkills from "../../hooks/useSkills.js";

const StudyMain = () => {
  const skills = useSkills();
  const studyState = useStudy();
  const selectedSkills = skills.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const studySearchResult = studyState.searchResult(skillIdList);

  return (
    <StudyMainContainer>
      <h2>스킬을 통해 스터디를 생성하거나 참가하세요!</h2>
      <SkillSearchBar selected />
      <DetailPage location='Study' classList={studySearchResult} />
    </StudyMainContainer>
  );
};

export default withRouter(StudyMain);

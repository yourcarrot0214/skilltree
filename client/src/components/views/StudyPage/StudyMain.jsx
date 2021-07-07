import React from "react";
import { withRouter } from "react-router-dom";
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
    <>
      <h3>Study Main Page</h3>
      <SkillSearchBar selected />
      <DetailPage location='Study' classList={studySearchResult} />
    </>
  );
};

export default withRouter(StudyMain);

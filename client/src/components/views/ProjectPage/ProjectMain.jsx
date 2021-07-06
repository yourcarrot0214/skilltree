import React from "react";
import { withRouter } from "react-router-dom";
import useProject from "../../hooks/useProject.js";
import DetailPage from "../../common/DetailPage.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import useSkills from "../../hooks/useSkills.js";

const ProjectMain = () => {
  const skills = useSkills();
  const projectState = useProject();
  const selectedSkills = skills.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const projectSearchResult = projectState.searchResult(skillIdList);

  return (
    <>
      <h3>Project Main Page</h3>
      <SkillSearchBar selected />
      <DetailPage location='Project' classList={projectSearchResult} />
    </>
  );
};

export default withRouter(ProjectMain);

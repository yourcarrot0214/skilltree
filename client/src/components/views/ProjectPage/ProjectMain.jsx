import React from "react";
import { withRouter } from "react-router-dom";
import useProject from "../../hooks/useProject.js";
import DetailPage from "../../common/DetailPage.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import useSkills from "../../hooks/useSkills.js";
import { ProjectMainContainer } from "./styles/styled.js";

const ProjectMain = () => {
  const skills = useSkills();
  const projectState = useProject();
  const selectedSkills = skills.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);
  const projectSearchResult = projectState.searchResult(skillIdList);

  return (
    <ProjectMainContainer>
      <h2>스킬을 통해 프로젝트를 생성하거나 참가하세요!</h2>
      <SkillSearchBar selected />
      <DetailPage location='Project' classList={projectSearchResult} />
    </ProjectMainContainer>
  );
};

export default withRouter(ProjectMain);

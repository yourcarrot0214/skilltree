import React from "react";
import { withRouter } from "react-router-dom";
import { LandingPageContainer } from "./styles/styled.js";
import Test from "../../../_reducers/Test.jsx";
import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

function LandingPage() {
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const selectedSkills = skillsState.selectedSkills();

  const relatedUsers = skillsState.relatedUsers(selectedSkills);

  return (
    <LandingPageContainer>
      <Header />
      <SkillSearchBar selected={true} />
      <Test />
    </LandingPageContainer>
  );
}

export default withRouter(LandingPage);

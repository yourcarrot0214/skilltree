import React from "react";
import { withRouter } from "react-router-dom";
import { LandingPageContainer } from "./styles/styled.js";
import { useDispatch } from "react-redux";
import { chooseOneSelected } from "../../../_actions/skill_action.js";
import Test from "../../../_reducers/Test.jsx";
import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";

import useSkills from "../../hooks/useSkills.js";
import useProject from "../../hooks/useProject.js";
import useStudy from "../../hooks/useStudy.js";

function LandingPage() {
  const dispatch = useDispatch();
  const skillsState = useSkills();
  const projectState = useProject();
  const studyState = useStudy();
  const selectedSkills = skillsState.selectedSkills();
  const skillIdList = selectedSkills.map((skill) => skill._id);

  const relatedUsers = skillsState.relatedUsers(selectedSkills);
  const relatedProject = projectState.relatedProject(skillIdList);

  const onClickFunction = (e) => {
    dispatch(chooseOneSelected(e.target.id));
  };

  return (
    <LandingPageContainer>
      <Header />
      <SkillSearchBar selected={true} onClickFunction={onClickFunction} />
      <Test />
    </LandingPageContainer>
  );
}

export default withRouter(LandingPage);

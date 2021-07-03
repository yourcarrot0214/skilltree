import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import DetailPage from "../../common/DetailPage.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import useSkills from "../../hooks/useSkills.js";

const ProjectMain = () => {
  const skills = useSkills();
  const projectState = useSelector((state) => state.project, shallowEqual);
  const selectedSkills = skills.selectedSkills();
  console.log(selectedSkills);

  return (
    <>
      <h3>Project Main Page</h3>
      <SkillSearchBar selected />
      <DetailPage location='Project' classList={projectState} />
    </>
  );
};

export default withRouter(ProjectMain);

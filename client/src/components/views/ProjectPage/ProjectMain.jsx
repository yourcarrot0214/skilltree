import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import DetailPage from "../../common/DetailPage.jsx";

const ProjectMain = () => {
  const projectState = useSelector((state) => state.project, shallowEqual);

  return (
    <>
      <h3>Project Main Page</h3>
      <DetailPage location='Project' classList={projectState} />
    </>
  );
};

export default withRouter(ProjectMain);

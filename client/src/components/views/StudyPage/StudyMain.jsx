import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import DetailPage from "../../common/DetailPage.jsx";

const StudyMain = () => {
  const studyState = useSelector((state) => state.study, shallowEqual);

  return (
    <>
      <h3>Study Main Page</h3>
      <DetailPage location='Study' classList={studyState} />
    </>
  );
};

export default withRouter(StudyMain);

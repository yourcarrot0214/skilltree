import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import DetailPage from "../../common/DetailPage.jsx";
import axios from "axios";

const ProjectMain = () => {
  const projectState = useSelector((state) => state.project, shallowEqual);
  // const getUserName = (leaderId) => {
  //   axios.post("/api/users/get/name", { _id: leaderId }).then((response) => {
  //     console.log(response.data.userName);
  //     return response.data.userName;
  //   });
  // };
  // const projectList = projectState.map(
  //   (project) => (project.leader = getUserName(project.leader))
  // );

  return (
    <>
      <h3>Project Main Page</h3>
      <DetailPage classList={projectState} />
    </>
  );
};

export default withRouter(ProjectMain);

import React, { useState } from "react";

const Project = ({ userData }) => {
  const [projectLeader, setProjectLeader] = useState(userData.project.leader);
  const [projectMember, setProjectMember] = useState(userData.project.member);
  const [projectApply, setProjectApply] = useState(userData.project.apply);
  console.log(`projectLeader : ${projectLeader}`);
  console.log(`projectMember : ${projectMember}`);
  console.log(`projectApply : ${projectApply}`);
  return (
    <>
      <div>운영중인 프로젝트</div>
      <div>참가중인 프로젝트</div>
      <div>지원중인 프로젝트</div>
    </>
  );
};

export default Project;

/*
  props.userData 에서 프로젝트 정보 id로 dispatch
*/

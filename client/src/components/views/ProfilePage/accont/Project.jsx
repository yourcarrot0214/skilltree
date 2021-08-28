import React from "react";
import useProject from "../../../hooks/useProject.js";
import { ClassCardContainer } from "../../../common/styles/styled";
import { ClassContainer, Menu } from "../styles/styled.js";
import ClassCard from "../../../common/class/ClassCard.jsx";
import PrintMessage from "./PrintMessage.jsx";

const Project = ({ userData }) => {
  const projectList = useProject();
  const projectLeader = projectList.leader(userData._id);
  const projectMember = projectList.findProject(userData.project.member);
  const projectApply = projectList.findProject(userData.project.apply);

  const interaction = (
    post = { leader: "", members: [], volunteer: [] },
    userId
  ) => {
    let userStatus, isVolunteer;

    if (post.leader === userId) userStatus = "운영중";
    else if (post.members.includes(userId)) userStatus = "참가중";
    else if (post.volunteer.includes(userId)) userStatus = "지원중";
    else userStatus = "-";

    if (post.volunteer.includes(userId)) isVolunteer = true;
    else isVolunteer = false;

    return { userStatus, isVolunteer };
  };

  const classCardList = (projectList) => {
    let initialState = {
      _id: "",
      title: "",
      description: "",
      skills: [],
      leader: "",
      personnel: 0,
      members: [],
      status: false,
      volunteer: [],
    };
    return projectList.map((project = initialState) => {
      let userInteraction = interaction(project, userData._id);
      return (
        <ClassCard
          key={project._id}
          id={project._id}
          title={project.title}
          description={project.description}
          skills={project.skills}
          leader={project.leader}
          personnel={project.personnel}
          members={project.members}
          status={project.status}
          location='Project'
          volunteer={project.volunteer}
          userStatus={userInteraction.userStatus}
          isVolunteer={userInteraction.isVolunteer}
          userData={userData}
        />
      );
    });
  };

  return (
    <ClassContainer>
      <Menu>운영중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectLeader.length !== 0 ? (
          classCardList(projectLeader)
        ) : (
          <PrintMessage message='운영중인 프로젝트가 없습니다.' />
        )}
      </ClassCardContainer>
      <Menu>참가중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectMember.length !== 0 ? (
          classCardList(projectMember)
        ) : (
          <PrintMessage message='참가중인 프로젝트가 없습니다.' />
        )}
      </ClassCardContainer>
      <Menu>지원중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectApply.length !== 0 ? (
          classCardList(projectApply)
        ) : (
          <PrintMessage message='지원중인 프로젝트가 없습니다.' />
        )}
      </ClassCardContainer>
    </ClassContainer>
  );
};

export default React.memo(Project);

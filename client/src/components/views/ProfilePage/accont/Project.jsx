import React from "react";
import useProject from "../../../hooks/useProject.js";
import { ClassCardContainer } from "../../../common/styles/styled";
import { ProjectContainer, Menu } from "../styles/styled.js";
import ClassCard from "../../../common/class/ClassCard.jsx";

const Project = ({ userData }) => {
  const projectList = useProject();
  const projectLeader = projectList.leader(userData._id);
  const projectMember = projectList.findProject(userData.project.member);
  const projectApply = projectList.findProject(userData.project.apply);

  return (
    <ProjectContainer>
      <Menu>운영중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectLeader.map((project) => (
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
          />
        ))}
      </ClassCardContainer>
      <Menu>참가중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectMember.map((project) => (
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
          />
        ))}
      </ClassCardContainer>
      <Menu>지원중인 프로젝트</Menu>
      <ClassCardContainer>
        {projectApply.map((project) => (
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
          />
        ))}
      </ClassCardContainer>
    </ProjectContainer>
  );
};

export default Project;

/*
  props.userData 에서 프로젝트 정보 id로 dispatch
*/

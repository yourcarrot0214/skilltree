import React from "react";
import useStudy from "../../../hooks/useStudy.js";
import { ClassCardContainer } from "../../../common/styles/styled";
import ClassCard from "../../../common/class/ClassCard.jsx";

const Study = ({ userData }) => {
  const studyList = useStudy();
  const studyLeader = studyList.leader(userData._id);
  const studyMember = studyList.findStudy(userData.study.member);
  const studyApply = studyList.findStudy(userData.study.apply);

  return (
    <>
      <div>운영중인 프로젝트</div>
      <ClassCardContainer>
        {studyLeader.map((study) => (
          <ClassCard
            key={study._id}
            id={study._id}
            title={study.title}
            description={study.description}
            skills={study.skills}
            leader={study.leader}
            personnel={study.personnel}
            members={study.members}
            status={study.status}
            location='Study'
            volunteer={study.volunteer}
          />
        ))}
      </ClassCardContainer>
      <div>참가중인 프로젝트</div>
      <ClassCardContainer>
        {studyMember.map((study) => (
          <ClassCard
            key={study._id}
            id={study._id}
            title={study.title}
            description={study.description}
            skills={study.skills}
            leader={study.leader}
            personnel={study.personnel}
            members={study.members}
            status={study.status}
            location='Study'
            volunteer={study.volunteer}
          />
        ))}
      </ClassCardContainer>
      <div>지원중인 프로젝트</div>
      <ClassCardContainer>
        {studyApply.map((study) => (
          <ClassCard
            key={study._id}
            id={study._id}
            title={study.title}
            description={study.description}
            skills={study.skills}
            leader={study.leader}
            personnel={study.personnel}
            members={study.members}
            status={study.status}
            location='Study'
            volunteer={study.volunteer}
          />
        ))}
      </ClassCardContainer>
    </>
  );
};

export default Study;

/*
  props.userData 에서 프로젝트 정보 id로 dispatch
*/

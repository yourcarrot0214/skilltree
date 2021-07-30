import React from "react";
import useStudy from "../../../hooks/useStudy.js";
import { ClassCardContainer } from "../../../common/styles/styled";
import { ClassContainer, Menu } from "../styles/styled.js";
import ClassCard from "../../../common/class/ClassCard.jsx";
import PrintMessage from "./PrintMessage.jsx";

const Study = ({ userData }) => {
  const studyList = useStudy();
  const studyLeader = studyList.leader(userData._id);
  const studyMember = studyList.findStudy(userData.study.member);
  const studyApply = studyList.findStudy(userData.study.apply);

  const classCardList = (studyList) => {
    return studyList.map((study) => (
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
    ));
  };

  return (
    <ClassContainer>
      <Menu>운영중인 스터디</Menu>
      <ClassCardContainer>
        {studyLeader.length !== 0 ? (
          classCardList(studyLeader)
        ) : (
          <PrintMessage message='운영중인 스터디가 없습니다.' />
        )}
      </ClassCardContainer>
      <Menu>참가중인 스터디</Menu>
      <ClassCardContainer>
        {studyMember.length !== 0 ? (
          classCardList(studyMember)
        ) : (
          <PrintMessage message='참가중인 스터디가 없습니다.' />
        )}
      </ClassCardContainer>
      <Menu>지원중인 스터디</Menu>
      <ClassCardContainer>
        {studyApply.length !== 0 ? (
          classCardList(studyApply)
        ) : (
          <PrintMessage message='지원중인 스터디가 없습니다.' />
        )}
      </ClassCardContainer>
    </ClassContainer>
  );
};

export default Study;

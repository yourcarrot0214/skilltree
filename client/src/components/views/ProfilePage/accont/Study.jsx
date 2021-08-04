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

  const classCardList = (studyList) => {
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
    return studyList.map((study = initialState) => {
      let userInteraction = interaction(study, userData._id);
      return (
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
          userStatus={userInteraction.userStatus}
          isVolunteer={userInteraction.isVolunteer}
          userData={userData}
        />
      );
    });
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

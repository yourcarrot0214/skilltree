import React from "react";
import PrintMessage from "../ProfilePage/accont/PrintMessage.jsx";
import {
  SectionContainer,
  SkillNameStyled,
  InfoStyled,
} from "./styles/styled.js";

const SkillInfoSection = ({ relatedUsers, relatedProject, relatedStudy }) => {
  return (
    <SectionContainer className='SkillsInfoSection'>
      {relatedUsers !== undefined ? (
        <>
          <SkillNameStyled>{`${relatedUsers.name}`}</SkillNameStyled>
          <div>
            <InfoStyled>{`스킬을 보유한 유저는 ${relatedUsers.technitianUsers.length}명, 학습중인 유저는 ${relatedUsers.learningUsers.length}명 입니다.`}</InfoStyled>
            <InfoStyled>{`스킬 기반 프로젝트는 ${relatedProject.length}개, 스터디는 ${relatedStudy.length}개 있습니다.`}</InfoStyled>
          </div>
        </>
      ) : (
        <PrintMessage message='스킬을 선택하세요!' />
      )}
    </SectionContainer>
  );
};

export default SkillInfoSection;

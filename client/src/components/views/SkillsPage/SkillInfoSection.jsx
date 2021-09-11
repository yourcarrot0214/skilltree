import React from "react";
import PrintMessage from "../ProfilePage/accont/PrintMessage.jsx";
import { HeaderStyled, SkillNameStyled, InfoStyled } from "./styles/styled.js";

const SkillInfoSection = ({ relatedUsers, relatedProject, relatedStudy }) => {
  return (
    <HeaderStyled>
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
    </HeaderStyled>
  );
};

export default SkillInfoSection;

/*
  정보 출력 업데이트.
  1. technitianUsers
    - 유저 목록 출력
    - 유저 인포 출력(onClickEvent)
  2. learningUsers
    - 유저 목록 출력
    - 유저 인포 출력(onClickEvent)
  3. project
    - 운영중인 프로젝트 목록 출력
    - 진행중인 프로젝트 목록 출력
  4. study
    - 운영중인 스터디 목록 출력
    - 진행중인 스터디 목록 출력

  <필요한 작업들>
  1. 프리젠테이셔널 컴포넌트
    - 유저 정보를 출력하는 컴포넌트
      : name, tech, learn
    - 프로젝트 / 스터디 정보를 출력하는 컴포넌트
      : title, 모집인원, 
      : ClassCard에서 구조 변경하는 방향으로 설계
      : 한 줄 텍스트 타입으로
      : onClick => Modal Popup <ClassInfo />
*/

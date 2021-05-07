import React, { useState } from "react";
import Button from "./Button.jsx";
import { TechStyled } from "../styles/styled.js";
import TagContainer from "./TagContainer.jsx";

const Tech = ({ userData }) => {
  const [ModalOpen, setModalOpen] = useState(false);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <TechStyled>
        <div>
          <span>Tech</span>
          <p>다룰 수 있는 스킬들을 관리합니다.</p>
        </div>
        <Button buttonName='수정' onClickFunction={onClickFunction} />
      </TechStyled>
      <TagContainer
        skills={userData.tech}
        setSkillName={null}
        setSelectedSkillId={null}
        addTech={null}
        addLearn={null}
      />
    </>
  );
};

export default Tech;

/*
  Tech 기능구현목표설정
    - userData.tech 배열에 있는 정보를 출력한다.
    - userData.tech 배열에 스킬을 등록, 삭제할 수 있어야 한다.
    - 스킬 등록 기능
      > axios.post("/api/users/update/tech", {tech data})
      > skills & user reducer, skills & skill & user action
      > db user tech update : tech name, _id
      > db skills technitianUser update : user object
    
    - Modal main
      > 스킬검색창
      > 모든 스킬 출력창
      > 선택된 스킬 출력창
      > 선택된 스킬을 테크에 등록 버튼
      > tech 스킬 출력창
        - 등록된 스킬을 클릭시 tech에서 삭제
      > 변경내용 저장하기 버튼

*/

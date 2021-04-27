import React, { useState } from "react";
import Button from "./Button.jsx";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import TagContainer from "../../../common/TagContainer.jsx";

const TechStyled = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin: 6px 0;
  span {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
  }
`;

const Tech = ({ userData }) => {
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onUpdateUserTech = (event) => {
    event.preventDefault();
    console.log("update tech");
  };

  const onChangeValue = (event) => {
    // setNewName(event.currentTarget.value);
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
        skillsList={userData.tech}
        setSkillName={null}
        skillDispatch={null}
        location='Tech'
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

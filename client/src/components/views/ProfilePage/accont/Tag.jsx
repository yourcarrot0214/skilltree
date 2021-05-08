import React, { useState } from "react";
import { TagStyled, ButtonBox, Button } from "../styles/styled.js";
import Modal from "./Modal.jsx";

const Tag = ({ id, tagname, addTech, addLearn }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState(id);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const updateTechSkill = () => {
    addTech(SkillId);
    setModalOpen(!ModalOpen);
  };

  const updateLearnSkill = () => {
    addLearn(SkillId);
    setModalOpen(!ModalOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (e.currentTarget.name === "tech") {
      console.log("tech update");
      updateTechSkill();
    } else if (e.currentTarget.name === "learn") {
      console.log("learn update");
      updateLearnSkill();
    }
  };

  return (
    <>
      <TagStyled onClick={onClickFunction}>{tagname}</TagStyled>
      <Modal
        onClickFunction={onClickFunction}
        header='스킬등록하기'
        openModal={ModalOpen}
      >
        <ButtonBox>
          <Button type='submit' name='tech' onClick={onSubmit}>
            Tech에 추가하기
          </Button>
          <Button type='submit' name='learn' onClick={onSubmit}>
            Learn에 추가하기
          </Button>
        </ButtonBox>
      </Modal>
    </>
  );
};

export default Tag;

/*
  Tech, Learn 하단에 출력되는 버튼에 클릭기능 제거
    - 1. 새로운 태그를 만든다.
    - 2. location props
*/

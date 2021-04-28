import React, { useState } from "react";
import Styled, { css } from "styled-components";
import Modal from "./Modal.jsx";

const TagStyled = Styled.button`
  height: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  background-color: #868e96;
  color: #f8f9fa;
`;

const ButtonBox = Styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const Button = Styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
`;

const Tag = ({
  id,
  tagname,
  setSkillName,
  setSelectedSkillId,
  addTech,
  addLearn,
}) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [SkillId, setSkillId] = useState(id);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const updateTechSkill = () => {
    setSelectedSkillId(SkillId);
    addTech(SkillId);
    setSkillName("");
    setModalOpen(!ModalOpen);
  };

  const updateLearnSkill = () => {
    setSelectedSkillId(SkillId);
    addLearn(SkillId);
    setSkillName("");
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
  Modal에서 사용할 함수
    props로 받아온 setState 함수를 통해 skill id를 부모 컴포넌트로 올려보내기.

*/

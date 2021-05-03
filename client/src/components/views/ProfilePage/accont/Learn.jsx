import React, { useState } from "react";
import Button from "./Button.jsx";
import { LearnStyled } from "../styles/styled.js";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
import TagContainer from "./TagContainer.jsx";

const Learn = ({ userData }) => {
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onUpdateUserLearn = (event) => {
    event.preventDefault();
    console.log("update tech");
  };

  const onChangeValue = (event) => {
    // setNewName(event.currentTarget.value);
  };
  return (
    <>
      <LearnStyled>
        <div>
          <span>Learn</span>
          <p>배우고 싶은 스킬들을 관리합니다.</p>
        </div>
        <Button buttonName='수정' onClickFunction={onClickFunction} />
        <Modal
          openModal={ModalOpen}
          onClickFunction={onClickFunction}
          header='Learn 스킬을 관리합니다.'
        ></Modal>
      </LearnStyled>
      <TagContainer
        skillsList={userData.learn}
        setSkillName={null}
        setSelectedSkillId={null}
        addTech={null}
        addLearn={null}
      />
    </>
  );
};

export default Learn;

/*
  onChangeUserName function
    - username update in MongoDB
    - axios post request
    - back-end response
*/

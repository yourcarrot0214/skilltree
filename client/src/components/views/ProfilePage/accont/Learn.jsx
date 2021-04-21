import React, { useState } from "react";
import Button from "./Button.jsx";
import Styled from "styled-components";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
// import { updateUserName } from "../../../../_actions/user_action.js";

const LearnStyled = Styled.div`
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

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  input {
    background-color : #212529;
    border: 1px solid black;
    border-radius: 6px;
    outline: none;
    padding: 6px 6px;
    color: white;
    margin-bottom: 2rem;
  }
  button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
  }
`;

const Learn = () => {
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
    <LearnStyled>
      <div>
        <span>Learn</span>
        <p>배우고 싶은 스킬들을 관리합니다.</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
      <Modal
        openModal={ModalOpen}
        onClickFunction={onClickFunction}
        header='사용자명 변경하기'
      >
        <Form submit={onUpdateUserLearn}>
          <label>사용자명</label>
          <input
            type='text'
            // value={NewName}
            onChange={onChangeValue}
            autoFocus
          />
          <button type='submit' onClick={onUpdateUserLearn}>
            변경하기
          </button>
        </Form>
      </Modal>
    </LearnStyled>
  );
};

export default Learn;

/*
  onChangeUserName function
    - username update in MongoDB
    - axios post request
    - back-end response
*/

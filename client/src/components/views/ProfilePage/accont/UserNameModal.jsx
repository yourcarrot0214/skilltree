import React, { useState } from "react";
import Styled from "styled-components";
import Modal from "react-modal";

const ButtonStyled = Styled.button`
  min-width: 60px;
  font-weight: bold;
  background-color: #495057;
  border: none;
  border-radius: 4px;
  color: white;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const UserNameModal = () => {
  var subtitle;
  const [ModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ButtonStyled onClick={openModal}>수정</ButtonStyled>
      <Modal
        isOpen={ModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
};

export default UserNameModal;

/*
  1. Modal에서 처리해야할 기능들
    - 현재 user.name을 가져와서 입력창에 value값으로 넣어준다.
    - name 변경을 위한 axios.post 요청
    - 변경된 name 반영을 위한 redux dispatch

  2. styled
    - button
    - Modal children
*/

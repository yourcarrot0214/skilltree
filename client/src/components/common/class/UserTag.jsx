import React, { useState, useEffect } from "react";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";

const UserTag = ({ userId }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState("DB 로딩중!");

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  // get username custom hook

  return (
    <>
      <h3>{userName}</h3>

      <Modal
        onClickFunction={onModalPopup}
        header='유저 정보'
        openModal={ModalOpen}
      >
        <div>user info component</div>
      </Modal>
    </>
  );
};

export default UserTag;

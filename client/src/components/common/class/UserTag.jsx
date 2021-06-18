import React, { useState } from "react";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import useGetUserName from "../../hooks/useGetUserName.js";

const UserTag = ({ userId }) => {
  const userName = useGetUserName(userId);
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <>
      <h3 onClick={onModalPopup}>{userName}</h3>

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

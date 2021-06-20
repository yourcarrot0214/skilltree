import React, { useState } from "react";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import useGetUserName from "../../hooks/useGetUserName.js";
import useGetUserInfo from "../../hooks/useGetUserInfo.js";
import UserInfo from "./UserInfo.jsx";

const UserTag = ({ userId }) => {
  const userInfo = useGetUserInfo(userId);
  const userName = useGetUserName(userId);
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  console.log(userInfo);

  return (
    <>
      <h3 onClick={onModalPopup}>{userName}</h3>

      <Modal
        onClickFunction={onModalPopup}
        header='유저 정보'
        openModal={ModalOpen}
      >
        <UserInfo userInfo={userInfo} />
      </Modal>
    </>
  );
};

export default UserTag;

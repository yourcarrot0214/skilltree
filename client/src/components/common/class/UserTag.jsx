import React, { useState } from "react";
import PropTypes from "prop-types";
import { UserTagContainer } from "../styles/styled.js";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import useGetUserName from "../../hooks/useGetUserName.js";
import useGetUserInfo from "../../hooks/useGetUserInfo.js";
import UserInfo from "./UserInfo.jsx";

const UserTag = (props) => {
  const { userId } = props;
  const userInfo = useGetUserInfo(userId);
  const userName = useGetUserName(userId);
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  return (
    <UserTagContainer>
      <span onClick={onModalPopup}>{userName}</span>

      <Modal
        onClickFunction={onModalPopup}
        header='유저 정보'
        openModal={ModalOpen}
      >
        <UserInfo userInfo={userInfo} />
      </Modal>
    </UserTagContainer>
  );
};

UserTag.propTypes = {
  userId: PropTypes.string,
};

export default UserTag;

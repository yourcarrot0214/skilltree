import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import Button from "./Button.jsx";
import useGetUserName from "../../hooks/useGetUserName.js";
import useGetUserInfo from "../../hooks/useGetUserInfo.js";
import UserInfo from "./UserInfo.jsx";
import {
  acceptProjectApply,
  rejectProjectApply,
} from "../../../_actions/project_action.js";
import {
  acceptStudyApply,
  rejectStudyApply,
} from "../../../_actions/study_action.js";

const UserTag = (props) => {
  const dispatch = useDispatch();
  const { userId, classId, location, acceptTrigger } = props;
  const userInfo = useGetUserInfo(userId);
  const userName = useGetUserName(userId);
  const [ModalOpen, setModalOpen] = useState(false);

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  const acceptDispatch = () => {
    console.log(acceptTrigger);
    if (!acceptTrigger) {
      return alert("멤버가 모두 모집되었습니다.");
    } else {
      console.log("accept dispatch request.");
    }

    let requestBody = {
      classId: classId,
      userId: userId,
    };
    if (location === "Project") {
      dispatch(acceptProjectApply(requestBody));
      console.log("accept project apply.");
    } else if (location === "Study") {
      dispatch(acceptStudyApply(requestBody));
      console.log("accept study apply.");
    }
  };

  const rejectDispatch = () => {
    let requestBody = {
      classId: classId,
      userId: userId,
    };
    if (location === "Project") {
      dispatch(rejectProjectApply(requestBody));
      console.log("reject project apply.");
    } else if (location === "Study") {
      dispatch(rejectStudyApply(requestBody));
      console.log("reject study apply.");
    }
  };

  return (
    <>
      <h3 onClick={onModalPopup}>{userName}</h3>
      <Button onClickFunction={acceptDispatch} accept />
      <Button onClickFunction={rejectDispatch} />
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

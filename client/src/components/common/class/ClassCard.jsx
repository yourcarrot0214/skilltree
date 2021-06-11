import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import {
  ClassCardThumbNail,
  ClassTitle,
  ClassDescription,
  ClassLeader,
  ClassPersonnel,
  ClassStatus,
} from "../styles/styled.js";
import TagContainer from "../TagContainer.jsx";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import ClassInfo from "./ClassInfo.jsx";

const ClassCard = (props) => {
  const {
    id,
    title,
    description,
    skills,
    leader,
    personnel,
    members,
    status,
  } = props;
  const userData = useSelector((state) => state.user.userData, shallowEqual);

  const roleValidation = (userId) => {
    if (userId === leaderId) {
      return "leader";
    } else if (members.find((member) => member === userId) !== undefined) {
      return "member";
    } else {
      return "user";
    }
  };

  const [leaderName, setLeaderName] = useState("DB 로딩중!");
  const [leaderId, setLeaderId] = useState(leader);
  const [ModalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState(roleValidation(userData._id));

  const onModalPopup = () => setModalOpen(!ModalOpen);

  const onClickFunction = () => {
    console.log("ClassCard onClickFunction.");
  };

  useEffect(() => {
    axios
      .post("/api/users/get/name", { _id: leader })
      .then((response) => setLeaderName(response.data.userName));
  });

  return (
    <>
      <ClassCardThumbNail id={id} onClick={onModalPopup}>
        <ClassTitle>{title}</ClassTitle>
        <ClassDescription>{description}</ClassDescription>
        <TagContainer
          skills={skills}
          selected={true}
          onClickFunction={onClickFunction}
        />
        <ClassLeader>{`리더 : ${leaderName}`}</ClassLeader>
        <ClassPersonnel>{`모집인원 : ${members.length} / ${personnel}`}</ClassPersonnel>
        <ClassStatus>{status ? "진행중" : "모집중"}</ClassStatus>
      </ClassCardThumbNail>
      <Modal
        onClickFunction={onModalPopup}
        header='Class 상세정보'
        openModal={ModalOpen}
      >
        <ClassInfo userData={userData} />
        {role === "leader" && <h3>LEADER</h3>}
        {role === "member" && <h3>MEMBER</h3>}
        {role === "user" && <h3>USER</h3>}
      </Modal>
    </>
  );
};

export default ClassCard;

/*
  Modal Children
    - ClassInfo
    - role에 따른 LeaderBoard, MemberBoard, UserBoard
*/

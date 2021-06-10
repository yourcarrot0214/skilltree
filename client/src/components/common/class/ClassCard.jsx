import React, { useState, useEffect } from "react";
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

const ClassCard = (props) => {
  const {
    id,
    title,
    description,
    skills,
    leader,
    personnel,
    membersLength,
    status,
  } = props;

  const [leaderName, setLeaderName] = useState("DB 로딩중!");
  const [ModalOpen, setModalOpen] = useState(false);

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
        <ClassPersonnel>{`모집인원 : ${membersLength} / ${personnel}`}</ClassPersonnel>
        <ClassStatus>{status ? "진행중" : "모집중"}</ClassStatus>
      </ClassCardThumbNail>
      <Modal
        onClickFunction={onModalPopup}
        header='Class 상세정보'
        openModal={ModalOpen}
      >
        <h3>Modal Test</h3>
      </Modal>
    </>
  );
};

export default ClassCard;

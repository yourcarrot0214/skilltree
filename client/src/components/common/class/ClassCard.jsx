import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ClassCardThumbNail,
  ClassCardHeader,
  ClassCardSection,
  ClassTable,
  ClassTableMenu,
  ClassTableValue,
  ClassTitle,
} from "../styles/styled.js";
import useGetUserName from "../../hooks/useGetUserName.js";
import TagContainer from "../TagContainer.jsx";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import ClassInfo from "./ClassInfo.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import MemberBoard from "./MemberBoard.jsx";
import UserBoard from "./UserBoard.jsx";

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
    location,
    volunteer,
    userStatus,
    isVolunteer,
    userData,
  } = props;

  const roleValidation = (userId) => {
    if (userId === leaderId) {
      return "leader";
    } else if (members.find((member) => member === userId) !== undefined) {
      return "member";
    } else if (userData._id && userData.isAuth) {
      return "user";
    } else {
      return "guest";
    }
  };

  const leaderName = useGetUserName(leader);
  const [leaderId] = useState(leader);
  const [userId] = useState(userData._id);
  const [ModalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState(roleValidation(userData._id));

  const onModalPopup = () => {
    setModalOpen(!ModalOpen);
  };

  const onClickFunction = () => {
    console.log("ClassCard onClickFunction.");
  };

  return (
    <>
      <ClassCardThumbNail id={id} onClick={onModalPopup}>
        <ClassCardHeader>
          <ClassTitle>{title}</ClassTitle>
          <TagContainer
            skills={skills}
            selected={true}
            onClickFunction={onClickFunction}
            thumbnail={true}
          />
        </ClassCardHeader>
        <ClassCardSection>
          <ClassTable>
            <ClassTableMenu>모집인원</ClassTableMenu>
            <ClassTableValue>{`${members.length} / ${personnel}`}</ClassTableValue>
          </ClassTable>
          <ClassTable>
            <ClassTableMenu>상태</ClassTableMenu>
            <ClassTableValue>{status ? "진행중" : "모집중"}</ClassTableValue>
          </ClassTable>
          <ClassTable>
            <ClassTableMenu>내 정보</ClassTableMenu>
            <ClassTableValue>{userStatus}</ClassTableValue>
          </ClassTable>
        </ClassCardSection>
      </ClassCardThumbNail>
      <Modal
        onClickFunction={onModalPopup}
        header='Class 상세정보'
        openModal={ModalOpen}
      >
        <ClassInfo
          id={id}
          title={title}
          description={description}
          skills={skills}
          leaderName={leaderName}
          personnel={personnel}
          members={members}
          status={status}
        />
        {role === "leader" && (
          <LeaderBoard
            classId={id}
            leaderId={leaderId}
            volunteer={volunteer}
            members={members}
            location={location}
            personnel={personnel}
            onModalPopup={onModalPopup}
          />
        )}
        {role === "member" && (
          <MemberBoard
            classId={id}
            userId={userId}
            location={location}
            onModalPopup={onModalPopup}
          />
        )}
        {role === "user" && (
          <UserBoard
            isVolunteer={isVolunteer}
            classId={id}
            userId={userId}
            location={location}
          />
        )}
      </Modal>
    </>
  );
};

ClassCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  leader: PropTypes.string,
  personnel: PropTypes.number,
  members: PropTypes.array,
  status: PropTypes.bool,
  location: PropTypes.string,
  volunteer: PropTypes.array,
  userStatus: PropTypes.string,
  inVolunteer: PropTypes.bool,
  userData: PropTypes.object,
};

export default ClassCard;

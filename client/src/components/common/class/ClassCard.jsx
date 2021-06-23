import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectedSkill } from "../../../_actions/skill_action.js";
import {
  ClassCardThumbNail,
  ClassTitle,
  ClassDescription,
  ClassLeader,
  ClassPersonnel,
  ClassStatus,
} from "../styles/styled.js";
import useGetUserName from "../../hooks/useGetUserName.js";
import TagContainer from "../TagContainer.jsx";
import Modal from "../../views/ProfilePage/accont/Modal.jsx";
import ClassInfo from "./ClassInfo.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import UserBoard from "./UserBoard.jsx";
import UpdateClassForm from "./UpdateClassForm.jsx";

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
  } = props;

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData, shallowEqual);

  const roleValidation = (userId) => {
    if (userId === leaderId) {
      return "leader";
    } else if (members.find((member) => member === userId) !== undefined) {
      return "member";
    } else if (userData.isAuth) {
      return "user";
    } else {
      return "guest";
    }
  };

  const applyCheck = (userId) => {
    if (volunteer.find((user) => user === userId) !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const leaderName = useGetUserName(leader);
  const [leaderId, setLeaderId] = useState(leader);
  const [userId, setUserId] = useState(userData._id);
  const [ModalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState(roleValidation(userData._id));
  const [componentToggle, setComponentToggle] = useState(false);
  const [isVolunteer, setIsVolunteer] = useState(applyCheck(userData._id));

  const onModalPopup = () => setModalOpen(!ModalOpen);
  const onComponentToggle = () => {
    setComponentToggle(!componentToggle);
    skills.map((skill) => dispatch(selectedSkill(skill._id)));
  };

  const onClickFunction = () => {
    console.log("ClassCard onClickFunction.");
  };

  return (
    <>
      <ClassCardThumbNail id={id} onClick={onModalPopup}>
        <ClassTitle>{title}</ClassTitle>
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
        {componentToggle ? (
          <UpdateClassForm
            location={location}
            title={title}
            description={description}
            personnel={personnel}
            submitAddFunction={setComponentToggle}
            id={id}
          />
        ) : (
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
        )}
        {role === "leader" && (
          <LeaderBoard
            classId={id}
            onComponentToggle={onComponentToggle}
            componentToggle={componentToggle}
            volunteer={volunteer}
            members={members}
            location={location}
            personnel={personnel}
          />
        )}
        {role === "member" && <h3>MEMBER</h3>}
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

export default ClassCard;

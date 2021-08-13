import React, { useState } from "react";
import PropTypes from "prop-types";
import UserTag from "./UserTag.jsx";
import Button from "./Button.jsx";
import { ButtonContainer, UserListWrapper } from "../styles/styled.js";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  acceptProjectApply,
  rejectProjectApply,
  expulsionProjectMember,
} from "../../../_actions/project_action.js";
import {
  deleteStudy,
  acceptStudyApply,
  rejectStudyApply,
  expulsionStudyMember,
} from "../../../_actions/study_action.js";
import {
  saveProjectMember,
  removeProjectMember,
  saveStudyMember,
  removeStudyMember,
} from "../../../_actions/user_action.js";

const LeaderBoard = ({
  classId,
  leaderId,
  onComponentToggle,
  componentToggle,
  volunteer,
  members,
  location,
  personnel,
  onModalPopup,
}) => {
  const dispatch = useDispatch();
  const [acceptTrigger] = useState(members.length < personnel);

  const deleteClass = () => {
    let check = window.confirm(`${location}를 정말 삭제할까요?`);

    if (check && location === "Project") {
      dispatch(deleteProject({ classId: classId, userId: leaderId }));
    } else if (check && location === "Study") {
      dispatch(deleteStudy({ classId: classId, userId: leaderId }));
    } else {
      return;
    }
    onModalPopup();
  };

  const acceptDispatch = (userId) => {
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
      dispatch(saveProjectMember(requestBody));
      console.log("accept project apply.");
    } else if (location === "Study") {
      dispatch(acceptStudyApply(requestBody));
      dispatch(saveStudyMember(requestBody));
      console.log("accept study apply.");
    }
  };

  const rejectDispatch = (userId) => {
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

  const memberExpulsion = (userId) => {
    let check = window.confirm("해당 멤버를 추방합니까?");
    let requestBody = {
      classId: classId,
      userId: userId,
    };
    if (check && location === "Project") {
      dispatch(expulsionProjectMember(requestBody));
      dispatch(removeProjectMember(requestBody));
      alert("프로젝트 멤버를 추방했습니다.");
    } else if (check && location === "Study") {
      dispatch(expulsionStudyMember(requestBody));
      dispatch(removeStudyMember(requestBody));
      alert("스터디 멤버를 추방했습니다.");
    } else {
      return;
    }
  };

  return (
    <>
      <h3>Leader Board</h3>
      <button onClick={onComponentToggle}>
        {componentToggle ? "취소하기" : "수정하기"}
      </button>
      <button onClick={deleteClass}>{`${location} 삭제하기`}</button>

      <h3>지원자 관리</h3>
      {volunteer.map((user) => (
        <UserListWrapper key={user}>
          <UserTag userId={user} />
          <ButtonContainer>
            <Button
              onClickFunction={acceptDispatch}
              admission={true}
              name='수락'
              userId={user}
            />
            <Button
              onClickFunction={rejectDispatch}
              admission={false}
              name='거절'
              userId={user}
            />
          </ButtonContainer>
        </UserListWrapper>
      ))}

      <h3>멤버 관리</h3>
      {members.map((user) => (
        <UserListWrapper key={user}>
          <UserTag userId={user} />
          <ButtonContainer>
            <Button
              onClickFunction={memberExpulsion}
              admission={false}
              name='추방'
              userId={user}
            />
          </ButtonContainer>
        </UserListWrapper>
      ))}
    </>
  );
};

LeaderBoard.propTypes = {
  classId: PropTypes.string,
  leaderId: PropTypes.string,
  onComonentToggle: PropTypes.func,
  componentToggle: PropTypes.bool,
  volunteer: PropTypes.array,
  members: PropTypes.array,
  location: PropTypes.string,
  personnel: PropTypes.number,
  onModalPopup: PropTypes.func,
};

export default LeaderBoard;

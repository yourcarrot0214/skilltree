import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { leaveToProject } from "../../../_actions/project_action.js";
import { leaveToStudy } from "../../../_actions/study_action.js";
import {
  removeProjectMember,
  removeStudyMember,
} from "../../../_actions/user_action.js";

const buttonStyle = {
  color: "#f0f0f0",
  backgroundColor: "#f03e3e",
  border: "none",
  fontSize: "1rem",
  padding: "0.4rem",
  borderRadius: "6px",
};

const MemberBoard = ({ classId, userId, location, onModalPopup }) => {
  const dispatch = useDispatch();
  const leaveClass = () => {
    let check = window.confirm(`${location}에서 정말 탈퇴합니까?`);
    let requestBody = {
      classId: classId,
      userId: userId,
    };

    if (check && location === "Project") {
      dispatch(leaveToProject(requestBody));
      dispatch(removeProjectMember(requestBody));
      alert("프로젝트에서 탈퇴 했습니다.");
    } else if (check && location === "Study") {
      dispatch(leaveToStudy(requestBody));
      dispatch(removeStudyMember(requestBody));
      alert("스터디에서 탈퇴 했습니다.");
    } else {
      return;
    }

    onModalPopup();
  };
  return (
    <>
      <h3 style={{ color: "#f0f0f0" }}>MemberBoard</h3>
      <button style={buttonStyle} onClick={leaveClass}>
        탈퇴하기
      </button>
    </>
  );
};

MemberBoard.propTypes = {
  classId: PropTypes.string,
  userId: PropTypes.string,
  location: PropTypes.string,
  onModalPopup: PropTypes.func,
};

export default MemberBoard;

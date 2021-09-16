import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  applyProject,
  cancelProjectApply,
} from "../../../_actions/project_action.js";
import {
  applyStudy,
  cancelStudyApply,
} from "../../../_actions/study_action.js";
import {
  saveApplyProject,
  removeApplyProject,
  saveApplyStudy,
  removeApplyStudy,
} from "../../../_actions/user_action.js";

const cancelButton = {
  color: "#f0f0f0",
  backgroundColor: "#f03e3e",
  border: "none",
  fontSize: "1rem",
  padding: "0.4rem",
  borderRadius: "6px",
};

const applyButton = {
  color: "#f0f0f0",
  backgroundColor: "#237804",
  border: "none",
  fontSize: "1rem",
  padding: "0.4rem",
  borderRadius: "6px",
};

const UserBoard = (props) => {
  const dispatch = useDispatch();
  const { isVolunteer, classId, userId, location } = props;
  const [volunteer, setVolunteer] = useState(isVolunteer);

  const applyToClass = () => {
    const requestBody = {
      classId: classId,
      userId: userId,
    };

    if (location === "Project") {
      dispatch(applyProject(requestBody));
      dispatch(saveApplyProject(requestBody));
      setVolunteer(!volunteer);
      alert(`프로젝트 참가 신청이 완료되었습니다.`);
    } else if (location === "Study") {
      dispatch(applyStudy(requestBody));
      dispatch(saveApplyStudy(requestBody));
      setVolunteer(!volunteer);
      alert(`스터디 참가 신청이 완료되었습니다.`);
    }
  };

  const applyToCancel = () => {
    const requestBody = {
      classId: classId,
      userId: userId,
    };

    if (location === "Project") {
      dispatch(cancelProjectApply(requestBody));
      dispatch(removeApplyProject(requestBody));
      setVolunteer(!volunteer);
      alert(`프로젝트 참가 신청이 취소되었습니다.`);
    } else if (location === "Study") {
      dispatch(cancelStudyApply(requestBody));
      dispatch(removeApplyStudy(requestBody));
      setVolunteer(!volunteer);
      alert(`스터디 참가 신청이 취소되었습니다.`);
    }
  };

  return (
    <>
      <h3 style={{ color: "#f0f0f0" }}>User Board</h3>
      {volunteer ? (
        <button style={cancelButton} onClick={applyToCancel}>
          참가신청취소
        </button>
      ) : (
        <button style={applyButton} onClick={applyToClass}>
          참가신청하기
        </button>
      )}
    </>
  );
};

UserBoard.propTypes = {
  isVolunteer: PropTypes.bool,
  classId: PropTypes.string,
  userId: PropTypes.string,
  location: PropTypes.string,
};

export default UserBoard;

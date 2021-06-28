import React, { useState } from "react";
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
  addApplyProject,
  cancelApplyProject,
} from "../../../_actions/user_action.js";

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
      dispatch(addApplyProject(requestBody));
      setVolunteer(!volunteer);
      alert("request apply to project");
    } else if (location === "Study") {
      dispatch(applyStudy(requestBody));
      setVolunteer(!volunteer);
      alert("request apply to study.");
    }
  };

  const applyToCancel = () => {
    const requestBody = {
      classId: classId,
      userId: userId,
    };

    if (location === "Project") {
      dispatch(cancelProjectApply(requestBody));
      dispatch(cancelApplyProject(requestBody));
      setVolunteer(!volunteer);
      alert("request project apply to cancel.");
    } else if (location === "Study") {
      dispatch(cancelStudyApply(requestBody));
      setVolunteer(!volunteer);
      alert("request study apply to cancel");
    }
  };

  return (
    <>
      <h3>User Board</h3>
      {volunteer ? (
        <button onClick={applyToCancel}>참가신청취소</button>
      ) : (
        <button onClick={applyToClass}>참가신청하기</button>
      )}
    </>
  );
};

export default UserBoard;

/*
  참가신청 dispatch 이후 화면 업데이트가 안됨.
  참가신청 => 참가신청취소로 전환되도록 코드 수정.
*/

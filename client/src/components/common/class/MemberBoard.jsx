import React from "react";
import { useDispatch } from "react-redux";
import { leaveToProject } from "../../../_actions/project_action.js";
import { leaveToStudy } from "../../../_actions/study_action.js";
import { removeProjectMember } from "../../../_actions/user_action.js";

const MemberBoard = ({ classId, userId, location, onModalPopup }) => {
  const dispatch = useDispatch();
  const leaveClass = () => {
    let check = window.confirm(`${location}에서 정말 탈퇴합니까?`);
    let requestBody = {
      classId: classId,
      userId: userId,
    };
    console.log(requestBody);

    if (check && location === "Project") {
      dispatch(leaveToProject(requestBody));
      dispatch(removeProjectMember(requestBody));
      alert("프로젝트에서 탈퇴 했습니다.");
    } else if (check && location === "Study") {
      dispatch(leaveToStudy(requestBody));
      alert("스터디에서 탈퇴 했습니다.");
    } else {
      return;
    }

    onModalPopup();
  };
  return (
    <>
      <h3>MemberBoard</h3>
      <button onClick={leaveClass}>탈퇴하기</button>
    </>
  );
};

export default MemberBoard;

import React from "react";
import { useDispatch } from "react-redux";
import { leaveToProject } from "../../../_actions/project_action.js";
import { leaveToStudy } from "../../../_actions/study_action.js";

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
      console.log("Project에서 탈퇴합니다.");
      dispatch(leaveToProject(requestBody));
    } else if (check && location === "Study") {
      console.log("Study에서 탈퇴합니다.");
      dispatch(leaveToStudy(requestBody));
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyProject } from "../../../_actions/project_action.js";
import { applyStudy } from "../../../_actions/study_action.js";

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
      setVolunteer(!volunteer);
      alert("request apply to project");
      console.log("request apply to project.");
    } else if (location === "Study") {
      dispatch(applyStudy(requestBody));
      setVolunteer(!volunteer);
      alert("request apply to study.");
      console.log("request apply to study.");
    }
  };

  return (
    <>
      <h3>User Board</h3>
      {volunteer ? (
        <button>참가신청취소</button>
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

import React from "react";
import UserTag from "./UserTag.jsx";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../../_actions/project_action.js";
import { deleteStudy } from "../../../_actions/study_action.js";

const LeaderBoard = ({
  classId,
  onComponentToggle,
  componentToggle,
  volunteer,
  members,
  location,
  personnel,
  onModalPopup,
}) => {
  const dispatch = useDispatch();

  const deleteClass = () => {
    let check = window.confirm(`${location}를 정말 삭제할까요?`);

    if (check && location === "Project") {
      dispatch(deleteProject({ id: classId }));
    } else if (check && location === "Study") {
      dispatch(deleteStudy({ id: classId }));
    } else {
      return;
    }
    onModalPopup();
  };
  return (
    <>
      <h3>Leader Board</h3>
      <button onClick={onComponentToggle}>
        {componentToggle ? "취소하기" : "수정하기"}
      </button>
      <button onClick={deleteClass}>{`${location} 삭제하기`}</button>

      {volunteer.map((user) => (
        <div key={user}>
          <UserTag
            userId={user}
            classId={classId}
            location={location}
            acceptTrigger={members.length < personnel}
          />
        </div>
      ))}
    </>
  );
};

export default LeaderBoard;

/*
  LeaderBoard
  1. 출력
    - 수정하기 : button => CreateClassForm 출력
    - 삭제하기 : button => dispatch
    - 지원중인 유저 : volunteer 배열 유저 정보 출력 
    - 참가중인 유저 : members 배열 유저 정보 출력
*/

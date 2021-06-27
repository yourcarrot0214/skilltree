import React, { useState } from "react";
import UserTag from "./UserTag.jsx";
import Button from "./Button.jsx";
import { ButtonContainer, UserListWrapper } from "../styles/styled.js";
import { useDispatch } from "react-redux";
import {
  deleteProject,
  acceptProjectApply,
  rejectProjectApply,
} from "../../../_actions/project_action.js";
import {
  deleteStudy,
  acceptStudyApply,
  rejectStudyApply,
} from "../../../_actions/study_action.js";

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
  const [acceptTrigger, setAcceptTrigger] = useState(
    members.length < personnel
  );

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
      console.log("accept project apply.");
    } else if (location === "Study") {
      dispatch(acceptStudyApply(requestBody));
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
        </UserListWrapper>
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

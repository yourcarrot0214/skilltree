import React from "react";

const LeaderBoard = ({ onComponentToggle }) => {
  return (
    <>
      <h3>Leader Board</h3>
      <button onClick={onComponentToggle}>수정하기</button>
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

import React from "react";

export default function UserSection() {
  return (
    <>
      <div className='user-box'>
        <div className='user-box-title'>
          <h3>스킬 관련 유저</h3>
        </div>
        <div className='tech-user-list'>
          <h3>스킬을 보유한 유저</h3>
          <p>Tester 1</p>
          <p>Tester 2</p>
          <p>Tester 3</p>
        </div>
        <div className='learn-user-list'>
          <h3>스킬을 학습중인 유저</h3>
          <p>Student 1</p>
          <p>Student 2</p>
          <p>Student 3</p>
        </div>
      </div>
    </>
  );
}

/*
	props로 유저 정보를 받아와서 map 함수로 유저 태그 출력
	onClickFunction으로 toggle 함수 props 전달
*/

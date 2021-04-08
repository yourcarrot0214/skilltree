import React from "react";

const Tag = (props) => {
  return (
    <>
      <span>{props.tagname}</span>
    </>
  );
};

export default Tag;

/*
  props로 name을 받아서 출력한다.
  tag 우측에 삭제 버튼을 출력한다.
  ex) [REACT|X]
*/

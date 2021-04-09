import React from "react";
import Styled from "styled-components";

const TagStyled = Styled.span`
  border: 1px solid black;
  margin: 6px 6px;
  padding: 6px 6px;
  border-radius: 3px;
`;

const Tag = (props) => {
  return (
    <TagStyled>
      <span>{props.tagname}</span>
    </TagStyled>
  );
};

export default Tag;

/*
  props로 name을 받아서 출력한다.
  tag 우측에 삭제 버튼을 출력한다.
  ex) [REACT|X]
*/

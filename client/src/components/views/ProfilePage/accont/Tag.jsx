import React from "react";
import { TagStyled } from "../styles/styled.js";

const Tag = ({ id, tagname, onClickFunction }) => {
  return (
    <>
      <TagStyled id={id} onClick={onClickFunction}>
        {tagname}
      </TagStyled>
    </>
  );
};

export default Tag;

/*
  Tech, Learn 하단에 출력되는 버튼에 클릭기능 제거
    - 1. 새로운 태그를 만든다.
    - 2. location props
*/

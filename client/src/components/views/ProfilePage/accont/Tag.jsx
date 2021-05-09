import React, { useMemo } from "react";
import { TagStyled } from "../styles/styled.js";

const getId = (id) => id;

const getTagname = (tagname) => tagname;

const getFunction = (onClickFunction) => onClickFunction;

const Tag = ({ id, tagname, onClickFunction }) => {
  const memorizedId = useMemo(() => getId(id), [id]);
  const memorizedTagname = useMemo(() => getTagname(tagname), [tagname]);
  const memorizedFunction = useMemo(() => getFunction(onClickFunction), [
    onClickFunction,
  ]);
  return (
    <>
      <TagStyled id={memorizedId} onClick={memorizedFunction}>
        {memorizedTagname}
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

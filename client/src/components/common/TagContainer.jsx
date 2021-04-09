import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import Styled from "styled-components";

import Tag from "./Tag.jsx";

const TagContainerStyled = Styled.div`
  display: flex;
  flex-direction: row;
`;

const TagContainer = () => {
  const { unSelectedSkills } = useSelector(
    (state) => ({ unSelectedSkills: state.unSelectedSkills }),
    shallowEqual
  );
  console.log(unSelectedSkills);

  return null;
};

export default TagContainer;

/*
  props로 받은 skill 배열을 가지고 Tag 컴포넌트를 생성한다.
  재사용되는 위치에 따라 styled-component로 크기, 위치 등을 스타일링 한다.

  
  
*/

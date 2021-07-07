import React, { useMemo } from "react";
import { TagContainerStyled } from "./styles/styled.js";
import Tag from "./Tag.jsx";

const getSkills = (skills) => skills;

const TagContainer = (props) => {
  const { skills, onClickFunction, selected } = props;
  const skillsList = useMemo(() => getSkills(skills), [skills]);
  return (
    <TagContainerStyled thumbnail={props.thumbnail || false}>
      {skillsList.map((skill) => (
        <Tag
          skillInfo={skill}
          key={skill._id}
          onClickFunction={onClickFunction}
          selected={selected}
        />
      ))}
    </TagContainerStyled>
  );
};

export default TagContainer;

/*
  1. 기능
    props로 전달받은 skills 배열 정보를 통해 Tag 컴포넌트 출력
  2. props
    - skills : 스킬 정보를 담고 있는 배열
*/

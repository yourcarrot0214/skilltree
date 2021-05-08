import React from "react";
import { TagContainerStyled } from "../styles/styled.js";
import Tag from "./Tag.jsx";

const TagContainer = (props) => {
  const { skills, setSkillName, addTech, addLearn } = props;
  return (
    <TagContainerStyled>
      {skills.map((skill) => (
        <Tag
          tagname={skill.name}
          key={skill._id}
          id={skill._id}
          setSkillName={setSkillName}
          addTech={addTech}
          addLearn={addLearn}
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

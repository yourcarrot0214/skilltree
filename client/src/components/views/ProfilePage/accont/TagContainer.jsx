import React from "react";
import { TagContainerStyled } from "../styles/styled.js";
import Tag from "./Tag.jsx";

const TagContainer = ({
  skillsList,
  setSkillName,
  setSelectedSkillId,
  addTech,
  addLearn,
}) => {
  return (
    <TagContainerStyled>
      {skillsList.map((skill) => (
        <Tag
          tagname={skill.name}
          key={skill._id}
          id={skill._id}
          setSkillName={setSkillName}
          setSelectedSkillId={setSelectedSkillId}
          addTech={addTech}
          addLearn={addLearn}
        />
      ))}
    </TagContainerStyled>
  );
};

export default TagContainer;

/*
  props 검증
    - Tag 스킬등록 기능구현에 필요한 데이터 검증.
*/

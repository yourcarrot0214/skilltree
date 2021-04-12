import React from "react";
import Styled from "styled-components";
import Tag from "./Tag.jsx";

const TagContainerStyled = Styled.div`
  border: 1px solid black;
`;

const TagContainer = (props) => {
  const skills = props.skills;
  const location = props.location;
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);

  return (
    <>
      <TagContainerStyled>
        {selectedSkills.map((skill) => (
          <Tag
            tagname={skill.name}
            key={skill._id}
            location={location}
            id={skill._id}
            selected={skill.selected}
            setSkillName={props.setSkillName}
          />
        ))}
        {unSelectedSkills.map((skill) => (
          <Tag
            tagname={skill.name}
            key={skill._id}
            location={location}
            id={skill._id}
            selected={skill.selected}
            setSkillName={props.setSkillName}
          />
        ))}
      </TagContainerStyled>
    </>
  );
};

export default TagContainer;

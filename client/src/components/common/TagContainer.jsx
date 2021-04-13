import React from "react";
import Styled from "styled-components";
import Tag from "./Tag.jsx";

const TagContainerStyled = Styled.div`
  border: 1px solid black;
`;

const TagContainer = ({
  skillsList,
  setSkillName,
  skillDispatch,
  location,
}) => {
  return (
    <>
      <TagContainerStyled>
        {skillsList.map((skill) => (
          <Tag
            tagname={skill.name}
            key={skill._id}
            id={skill._id}
            selected={skill.selected}
            setSkillName={setSkillName}
            skillDispatch={skillDispatch}
            location={location}
          />
        ))}
      </TagContainerStyled>
    </>
  );
};

export default TagContainer;

/*
  TagContainer에 props로 전달되는 값에 따라 styled-components 적용
    - ${(props) => props.previewPage && css``}
*/

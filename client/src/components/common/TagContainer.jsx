import React, { useMemo } from "react";
import PropTypes from "prop-types";
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

TagContainer.propTypes = {
  skills: PropTypes.array,
  onClickFunction: PropTypes.func,
  selected: PropTypes.bool,
};

export default TagContainer;

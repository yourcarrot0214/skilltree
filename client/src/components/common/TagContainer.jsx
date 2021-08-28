import React from "react";
import PropTypes from "prop-types";
import { TagContainerStyled } from "./styles/styled.js";
import Tag from "./Tag.jsx";

const TagContainer = (props) => {
  const { skills, onClickFunction, selected } = props;
  return (
    <TagContainerStyled thumbnail={props.thumbnail || false}>
      {skills.map((skill) => (
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

export default React.memo(TagContainer);

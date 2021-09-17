import React from "react";
import PropTypes from "prop-types";
import { TagStyled } from "./styles/styled.js";

const Tag = ({ skillInfo, onClickFunction, selected }) => {
  return (
    <>
      <TagStyled
        id={skillInfo._id}
        onClick={onClickFunction}
        selected={skillInfo.selected}
      >
        {skillInfo.name.toLowerCase()}
      </TagStyled>
    </>
  );
};

Tag.propTypes = {
  skillInfo: PropTypes.object,
  onClickFunction: PropTypes.func,
  seleted: PropTypes.bool,
};

export default React.memo(Tag);

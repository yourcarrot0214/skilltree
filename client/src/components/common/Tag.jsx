import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

const Tag = ({ skillInfo, onClickFunction, selected }) => {
  return (
    <Button
      id={skillInfo._id}
      variant={selected ? "contained" : "outlined"}
      color={selected ? "success" : "info"}
      size="small"
      onClick={onClickFunction}
      selected={skillInfo.selected || selected}
      sx={{ margin: "0.2rem 0.2rem" }}
    >
      {skillInfo.name.toLowerCase()}
    </Button>
  );
};

Tag.propTypes = {
  skillInfo: PropTypes.object,
  onClickFunction: PropTypes.func,
  seleted: PropTypes.bool,
};

export default React.memo(Tag);

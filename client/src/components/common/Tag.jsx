import React, { useMemo } from "react";
import { TagStyled } from "./styles/styled.js";

const getId = (id) => id;

const getTagname = (tagname) => tagname;

const getFunction = (onClickFunction) => onClickFunction;

const Tag = ({ skillInfo, onClickFunction, selected }) => {
  const { _id, name } = skillInfo;
  const memorizedId = useMemo(() => getId(_id), [_id]);
  const memorizedTagname = useMemo(() => getTagname(name), [name]);
  const memorizedFunction = useMemo(() => getFunction(onClickFunction), [
    onClickFunction,
  ]);
  return (
    <>
      <TagStyled
        id={memorizedId}
        onClick={memorizedFunction}
        selected={selected}
      >
        {memorizedTagname}
      </TagStyled>
    </>
  );
};

export default Tag;

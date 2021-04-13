import React from "react";
import Styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { selectedSkill } from "../../_actions/skill_action.js";

const TagStyled = Styled.button`
  height: 32px;
  margin: 6px 6px;
  border: none;
  background-color: #868e96;
  color: #f8f9fa;
  display: inline-block;
  ${(props) =>
    props.selected &&
    css`
      background-color: #51cf66;
    `}
`;

const Tag = ({ selected, id, tagname, setSkillName }) => {
  const dispatch = useDispatch();

  const onClickFunction = () => {
    dispatch(selectedSkill(id));
    setSkillName("");
  };

  return (
    <TagStyled selected={selected} onClick={onClickFunction}>
      {tagname}
    </TagStyled>
  );
};

export default Tag;

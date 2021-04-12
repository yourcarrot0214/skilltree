import React, { useState } from "react";
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
  ${(props) =>
    props.searchResult &&
    css`
      display: block;
    `}
      
`;

const Tag = ({ selected, searchResult, location, id, tagname }) => {
  const [Selected, setSelected] = useState(selected);
  const dispatch = useDispatch();

  const onClickFunction = () => {
    dispatch(selectedSkill(id));
    setSelected(!Selected);
  };

  return (
    <TagStyled
      searchResult={searchResult}
      selected={Selected}
      onClick={location === "SkillSearchBar" ? onClickFunction : null}
    >
      {tagname}
    </TagStyled>
  );
};

export default Tag;

/*
  1. Tag Button을 클릭하면 dispatch를 보낸다.
    - unSelectedSkills에서 해당 스킬을 제외한 나머지 스킬 배열을 리턴한다.
    - SelectedSkills에 해당 스킬을 추가한 배열을 리턴한다.
  2. Tag searchResult === true
    - display: none;
*/

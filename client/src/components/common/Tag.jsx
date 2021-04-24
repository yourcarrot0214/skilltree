import React from "react";
import Styled, { css } from "styled-components";

const TagStyled = Styled.button`
  height: 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 4px;
  background-color: #868e96;
  color: #f8f9fa;
  
  ${(props) => {
    props.tech &&
      css`
        background-color: #51cf66;
      `;
  }}

  ${(props) => {
    props.learn &&
      css`
        background-color: #fcc419;
      `;
  }}

  ${(props) =>
    props.dual &&
    css`
      background-color: #e8590c;
    `}
  
`;

const Tag = ({
  selected,
  id,
  tagname,
  setSkillName,
  skillDispatch,
  location,
}) => {
  const onClickFunction = () => {
    console.log(location);
    if (location === "LandingPage") {
      skillDispatch(id);
      setSkillName("");
    } else if (location === "ProfileMain") {
      skillDispatch(id);
      setSkillName("");
    } else {
      return null;
    }
  };

  return (
    <TagStyled selected={selected} onClick={onClickFunction}>
      {tagname}
    </TagStyled>
  );
};

export default Tag;

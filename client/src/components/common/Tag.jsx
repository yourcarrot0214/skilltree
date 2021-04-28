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
  onClickFunction,
}) => {
  return (
    <TagStyled selected={selected} onClick={onClickFunction}>
      {tagname}
    </TagStyled>
  );
};

export default Tag;

/*
  issue 1. onClickFunction
    - LandingPage, UserProfileCard에서 다른 동작을 실행해야 함.
    - 공통 컴포넌트가 아닌 다른 컴포넌트로 분리해서 사용하는 해결방안.
      > Modal에서 Tech, learn에 등록하기 버튼 제공
      > submit시 해당 Tag id값이 일치하는 스킬의 technitianUsers 배열에서 userData._id가 있는지 검증
      > 있으면 return, 없으면 dispatch
*/

import React from "react";
import Styled from "styled-components";

const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  width: 90%;
  margin: 0 auto;
`;

const SkillSearchBar = ({ setSkillName, SkillName, onSkillSearch }) => {
  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  return (
    <SkillSearchBarStyled>
      <form onSubmit={onSkillSearch}>
        <input
          type='text'
          name='skill-name'
          value={SkillName}
          onChange={onChangeValue}
        />
        <button type='submit'>Skill Search</button>
      </form>
    </SkillSearchBarStyled>
  );
};

export default SkillSearchBar;

/*
  1. TagContainer, Tag 출력 부분 분리
  2. props 정리
    - SkillName, setSkillName 외 제거
*/

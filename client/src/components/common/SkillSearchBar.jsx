import React, { useState } from "react";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { selectedSkill } from "../../_actions/skill_action.js";

import useSearchResult from "../hooks/useSearchResult.js";

// styles > styled.js로 이동
const SkillSearchBarStyled = Styled.div`
  padding: 1rem 1rem;
  width: 90%;
  margin: 0 auto;
`;

const SkillSearchBar = () => {
  const dispatch = useDispatch();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    skillDispatch(skillSearchResult._id);
    setSkillName("");
  };

  return (
    <SkillSearchBarStyled>
      <form onSubmit={onSkillSearch}>
        <input
          type='text'
          name='skill-name'
          value={skillName}
          onChange={onChangeValue}
        />
        <button type='submit'>Skill Search</button>
      </form>
    </SkillSearchBarStyled>
  );
};

export default SkillSearchBar;

/*
  issue 1.
  skillSearchBar 컴포넌트에서의 결과를 부모 컴포넌트로 보낼 방법.
  useSearchResult hook으로 검색에 필요한 로직을 덜어냈지만 부모 컴포넌트로
  결과를 전달할 방법을 찾지 못함.
*/

/*
  default

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

*/

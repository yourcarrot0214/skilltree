import React, { useState, useEffect } from "react";
import { SkillSearchBarStyled } from "./styles/styled.js";
import TagContainer from "../common/TagContainer.jsx";
import Tag from "../common/Tag.jsx";
import { useDispatch } from "react-redux";
import {
  selectedSkill,
  selectedReset,
  searchRequest,
} from "../../_actions/skill_action.js";

import useSearchResult from "../hooks/useSearchResult.js";
import useSkills from "../hooks/useSkills.js";

const SkillSearchBar = (props) => {
  // props list :: skillSearchFunction, onClickFunction
  const dispatch = useDispatch();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);
  const skills = useSkills();
  const selectedSkills = skills.selectedSkills();
  const unSelectedSkills = skills.unSelectedSkills();

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const dispatchSkillSearch = (skillName) => dispatch(searchRequest(skillName));
  /*
    selectedSkill => searchResult로 수정
    store.searchResult에 스킬 검색 결과를 저장하고
    이 정보를 구독 해 출력 컴포넌트에서 활용하도록 코드 수정.
  */
  const onSkillSearch = (event) => {
    event.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    skillDispatch(skillSearchResult._id);
    setSkillName("");
  };

  const onClickFunction = (e) => {
    const skillId = e.target.id;
    skillDispatch(skillId);
    setSkillName("");
  };

  useEffect(() => {
    return dispatch(selectedReset());
  }, [dispatch]);

  return (
    <SkillSearchBarStyled>
      <form
        onSubmit={props.onSkillSearch ? props.onSkillSearch : onSkillSearch}
      >
        <input
          type='text'
          name='skill-name'
          value={skillName}
          onChange={onChangeValue}
        />
        <button type='submit'>Skill Search</button>
      </form>
      {skillName === "" ? (
        <>
          <TagContainer
            skills={selectedSkills}
            onClickFunction={
              props.onClickFunction ? props.onClickFunction : onClickFunction
            }
            selected={props.selected ? true : null}
          />
          <TagContainer
            skills={unSelectedSkills}
            onClickFunction={
              props.onClickFunction ? props.onClickFunction : onClickFunction
            }
            selected={props.selected ? false : null}
          />
        </>
      ) : skillSearchResult ? (
        <Tag
          skillInfo={skillSearchResult}
          key={skillSearchResult.key}
          onClickFunction={
            props.onClickFunction ? props.onClickFunction : onClickFunction
          }
          selected={skillSearchResult.selected}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
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

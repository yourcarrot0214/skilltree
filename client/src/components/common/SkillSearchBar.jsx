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
  // const selectedSkills = skills.selectedSkills();
  // const unSelectedSkills = skills.unSelectedSkills();
  const selectedSkills =
    props.selectedSkills || skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const dispatchSkillSearch = (searchResult) =>
    dispatch(searchRequest(searchResult));
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

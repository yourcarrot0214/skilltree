import React, { useState, useEffect } from "react";
import {
  SkillSearchBarStyled,
  SkillSearchForm,
  SearchBar,
  SearchButton,
} from "./styles/styled.js";
import TagContainer from "../common/TagContainer.jsx";
import Tag from "../common/Tag.jsx";
import PrintMessage from "../views/ProfilePage/accont/PrintMessage.jsx";
import { useDispatch } from "react-redux";
import {
  selectedSkill,
  selectedReset,
  chooseOneSelected,
} from "../../_actions/skill_action.js";

import useSearchResult from "../hooks/useSearchResult.js";
import useSkills from "../hooks/useSkills.js";

const SkillSearchBar = (props) => {
  const dispatch = useDispatch();
  const skills = useSkills();
  const [skillName, setSkillName] = useState("");
  const skillSearchResult = useSearchResult(skillName);

  const selectedSkills = skills.selectedSkills();
  const unSelectedSkills = skills.filter((skill) => !skill.selected);

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (skillName === "") return;
    if (skillSearchResult === undefined) return;
    if (props.chooseOneSelected) {
      console.log("chooseOneSelected");
      dispatch(chooseOneSelected(skillSearchResult._id));
      props.setSkillId((prev) =>
        skillSearchResult._id === prev ? "" : skillSearchResult._id
      );
    } else {
      console.log("selectedSkill");
      skillDispatch(skillSearchResult._id);
    }
    setSkillName("");
  };

  const onClickFunction = (e) => {
    const skillId = e.target.id;
    skillDispatch(skillId);
    setSkillName("");
  };

  useEffect(() => {
    return () => {
      dispatch(selectedReset());
    };
  }, [dispatch]);

  return (
    <SkillSearchBarStyled>
      <SkillSearchForm
        onSubmit={props.onSkillSearch ? props.onSkillSearch : onSkillSearch}
      >
        <SearchBar
          type='text'
          name='skill-name'
          value={skillName}
          onChange={onChangeValue}
          placeholder='찾는 스킬이 있나요?'
        />
        <SearchButton type='submit'>Skill Search</SearchButton>
      </SkillSearchForm>
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
        <div style={{ minHeight: "180px" }}>
          <PrintMessage message='검색 결과가 없습니다.' />
        </div>
      )}
    </SkillSearchBarStyled>
  );
};

export default SkillSearchBar;

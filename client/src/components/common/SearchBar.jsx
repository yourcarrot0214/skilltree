import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  SkillSearchBarStyled,
  SkillSearchForm,
  SearchBar,
  SearchButton,
} from "./styles/styled.js";
import { useDispatch } from "react-redux";
import { selectedReset } from "../../_actions/skill_action.js";

// import useSearchResult from "../hooks/useSearchResult.js";

const SkillSearchBar = (props) => {
  const { onSkillSearch, onChangeValue, skillName } = props;
  const dispatch = useDispatch();
  //   const skillSearchResult = useSearchResult(skillName);

  //   const onChangeValue = (event) => {
  //     setSkillName(event.currentTarget.value);
  //   };

  //   const skillDispatch = (id) => dispatch(selectedSkill(id));

  //   const onSkillSearch = (event) => {
  //     event.preventDefault();
  //     if (skillName === "") return;
  //     if (skillSearchResult === undefined) return;

  // if (props.chooseOneSelected) {
  //   dispatch(chooseOneSelected(skillSearchResult._id));
  //   props.setSkillId((prev) =>
  //     skillSearchResult._id === prev ? "" : skillSearchResult._id
  //   );
  // } else {
  //   skillDispatch(skillSearchResult._id);
  // }

  // setSkillName("");
  //   };

  //   const onClickFunction = (e) => {
  //     const skillId = e.target.id;
  //     skillDispatch(skillId);
  //     setSkillName("");
  //   };

  useEffect(() => {
    return () => {
      dispatch(selectedReset());
    };
  }, [dispatch]);

  return (
    <SkillSearchBarStyled>
      <SkillSearchForm onSubmit={onSkillSearch}>
        <SearchBar
          type='text'
          name='skill-name'
          value={skillName}
          onChange={onChangeValue}
          placeholder='찾는 스킬이 있나요?'
        />
        <SearchButton type='submit'>Skill Search</SearchButton>
      </SkillSearchForm>
    </SkillSearchBarStyled>
  );
};

SkillSearchBar.propTypes = {
  onSkillSearch: PropTypes.func,
  onClickFunction: PropTypes.func,
  onChangeValue: PropTypes.func,
};

export default SkillSearchBar;

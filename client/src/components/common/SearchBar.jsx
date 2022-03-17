import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  SkillSearchBarStyled,
  SkillSearchForm,
  SearchBarInput,
  SearchButton,
} from "./styles/styled.js";
import { useDispatch } from "react-redux";
import { selectedReset } from "../../_actions/skill_action.js";

const SearchBar = (props) => {
  const { onSkillSearch, onChangeValue, skillName } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(selectedReset());
    };
  }, [dispatch]);

  return (
    <SkillSearchBarStyled className="SearchBar">
      <SkillSearchForm onSubmit={onSkillSearch}>
        <SearchBarInput
          type="text"
          name="skill-name"
          value={skillName}
          onChange={onChangeValue}
          placeholder="찾는 스킬이 있나요?"
        />
        <SearchButton type="submit">Skill Search</SearchButton>
      </SkillSearchForm>
    </SkillSearchBarStyled>
  );
};

SearchBar.propTypes = {
  onSkillSearch: PropTypes.func,
  onClickFunction: PropTypes.func,
  onChangeValue: PropTypes.func,
};

export default SearchBar;

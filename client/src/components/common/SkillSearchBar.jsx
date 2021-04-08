import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { skillSearch } from "../../_actions/skill_action.js";

const SkillSearchBar = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value.toUpperCase());
  };

  const onSkillSearch = (event) => {
    event.preventDefault();
    console.log("Skill Search Request.");
    const requestBody = { name: SkillName };
    dispatch(skillSearch(requestBody)).then((response) => {
      if (!response.payload.skillSearchSuccess) {
        setErrorMessage("해당 스킬이 DB에 없습니다.");
      } else {
        setErrorMessage("");
      }
    });
    setSkillName("");
  };

  return (
    <>
      <form onSubmit={onSkillSearch}>
        <input
          type='text'
          name='skill-name'
          value={SkillName}
          onChange={onChangeValue}
        />
        <button type='submit'>Skill Search</button>
      </form>
      {ErrorMessage !== "" && <p>{ErrorMessage}</p>}
    </>
  );
};

export default SkillSearchBar;

/*
    sumit button은 로고로 대체한다.

    submit function
      - skill_reducer
      - skill_action
*/

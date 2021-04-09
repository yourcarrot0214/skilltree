import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { skillSearch } from "../../_actions/skill_action.js";

const SkillSearchBar = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const onSkillSearch = (event) => {
    event.preventDefault();
    // if (SkillName === "") return;
    console.log("Skill Search Request.");
    // const requestBody = { name: SkillName.toUpperCase() };
    // dispatch(skillSearch(requestBody)).then((response) => {
    //   if (!response.payload.skillSearchSuccess) {
    //     setErrorMessage("해당 스킬이 DB에 없습니다.");
    //   } else {
    //     setErrorMessage("");
    //   }
    // });
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
      <p>{SkillName}</p>
    </>
  );
};

export default SkillSearchBar;

/*
  Inflearn 기능 clone
  1. 검색창
    - 기술을 검색하면 결과 태그를 보여준다.
    - 결과 태그를 선택하면 선택된 태그 목록에 추가된다.
  2. 모든 기술 태그
    - 선택된 태그
    - 선택되지 않은 태그
  
  DB에 저장된 모든 스킬들을 선택되지 않은 태그 배열에 넣어 출력한다.
  
*/

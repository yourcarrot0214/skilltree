import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TagContainer from "./TagContainer.jsx";
import { selectedSkill } from "../../_actions/skill_action.js";
import Tag from "./Tag.jsx";

const SkillSearchBar = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const skills = useSelector((state) => state.skills, shallowEqual);
  const location = "SkillSearchBar";

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    console.log("Skill Search Request.");
    dispatch(selectedSkill(skillSearchResult._id));
    setSkillName("");
  };

  const skillSearchResult = useSelector(
    (state) =>
      state.skills.find((skill) => skill.name === SkillName.toUpperCase()),
    shallowEqual
  );
  // console.log(skillSearchResult);

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
        {ErrorMessage !== "" && <p>{ErrorMessage}</p>}
        <TagContainer
          skills={skills}
          location={location}
          skillSearchResult={skillSearchResult}
        />
      </form>
    </>
  );
};

export default SkillSearchBar;

/*
  기능구현목표설정
  1. redux store skills state에서 검색창에 입력된 스킬을 검색한다.
    - onChangeValue에서 value값이 변경될 때 마다 submit request를 보내는 방법?
    - 현재 skillName value값을 출력
      > 해당 출력영역 고정 width, height 설정.
    - skillName을 requestBody로 검색한 결과를 출력
      > 결과가 없으면 ErrorMessage
      > 결과가 있으면 해당 스킬 태그.
      > 스킬태그 선택시 selected값 토글.

  2. useSelector
    - state.skills에서 입력된 skillName에 해당하는 값을 가져오기.

  3. Tag Component 출력
    - useSelector에서 가져온 값을 통해 Tag component 출력
      
*/

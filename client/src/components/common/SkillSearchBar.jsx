import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TagContainer from "./TagContainer.jsx";
import { selectedSkill } from "../../_actions/skill_action.js";
import Tag from "./Tag.jsx";

const SkillSearchBar = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");

  const skills = useSelector((state) => state.skills, shallowEqual);
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);

  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    dispatch(selectedSkill(skillSearchResult._id));
    setSkillName("");
  };

  const skillSearchResult = useSelector(
    (state) =>
      state.skills.find((skill) => skill.name === SkillName.toUpperCase()),
    shallowEqual
  );

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
      {SkillName === "" ? (
        <>
          <TagContainer
            skillsList={unSelectedSkills}
            setSkillName={setSkillName}
          />
          <TagContainer
            skillsList={selectedSkills}
            setSkillName={setSkillName}
          />
        </>
      ) : skillSearchResult ? (
        <Tag
          tagname={skillSearchResult.name}
          key={skillSearchResult.key}
          id={skillSearchResult._id}
          selected={skillSearchResult.selected}
          setSkillName={setSkillName}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </>
  );
};

export default SkillSearchBar;

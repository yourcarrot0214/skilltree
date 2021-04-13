import React from "react";
import TagContainer from "./TagContainer.jsx";
import Tag from "./Tag.jsx";

const SkillSearchBar = ({
  selectedSkills,
  unSelectedSkills,
  skillSearchResult,
  setSkillName,
  SkillName,
  skillDispatch,
}) => {
  const onChangeValue = (event) => {
    setSkillName(event.currentTarget.value);
  };

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    skillDispatch(skillSearchResult._id);
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
      {SkillName === "" ? (
        <>
          <TagContainer
            skillsList={unSelectedSkills}
            setSkillName={setSkillName}
            skillDispatch={skillDispatch}
          />
          <TagContainer
            skillsList={selectedSkills}
            setSkillName={setSkillName}
            skillDispatch={skillDispatch}
          />
        </>
      ) : skillSearchResult ? (
        <Tag
          tagname={skillSearchResult.name}
          key={skillSearchResult.key}
          id={skillSearchResult._id}
          selected={skillSearchResult.selected}
          setSkillName={setSkillName}
          skillDispatch={skillDispatch}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </>
  );
};

export default SkillSearchBar;

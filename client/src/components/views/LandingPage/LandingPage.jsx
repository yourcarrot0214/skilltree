import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectedSkill } from "../../../_actions/skill_action.js";

import Test from "../../../_reducers/Test.jsx";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import TagContainer from "../../common/TagContainer.jsx";
import Tag from "../../common/Tag.jsx";

function LandingPage() {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");

  const skills = useSelector((state) => state.skills, shallowEqual);
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);
  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );
  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;
    console.log("Skill Search Request.");
    skillDispatch(skillSearchResult._id);
    setSkillName("");
  };

  const onClickFunction = (e) => {
    const skillId = e.target.id;
    dispatch(selectedSkill(skillId));
  };

  return (
    <>
      <h2>Landing Page</h2>
      <Header />
      <SkillSearchBar
        setSkillName={setSkillName}
        SkillName={SkillName}
        onSkillSearch={onSkillSearch}
      />
      {SkillName === "" ? (
        <>
          <TagContainer
            skills={selectedSkills}
            onClickFunction={onClickFunction}
            selected={true}
          />
          <TagContainer
            skills={unSelectedSkills}
            onClickFunction={onClickFunction}
            selected={false}
          />
        </>
      ) : skillSearchResult ? (
        <Tag
          skillInfo={skillSearchResult}
          key={skillSearchResult.key}
          onClickFunction={onClickFunction}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
      <Test />
    </>
  );
}

export default withRouter(LandingPage);

/*
  1. DB에서 skills data를 가져온다.
  2. 가져온 데이터를 redux, unSelectedSkills 배열에 넣는다.
  3. 
*/

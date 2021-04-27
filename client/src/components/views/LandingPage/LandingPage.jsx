import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSkillsDB, selectedSkill } from "../../../_actions/skill_action.js";

import Test from "../../../_reducers/Test.jsx";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import TagContainer from "../../common/TagContainer.jsx";
import Tag from "../../common/Tag.jsx";

function LandingPage() {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");
  const location = "LandingPage";

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

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
            skillsList={unSelectedSkills}
            setSkillName={setSkillName}
            skillDispatch={skillDispatch}
            location={location}
          />
          <TagContainer
            skillsList={selectedSkills}
            setSkillName={setSkillName}
            skillDispatch={skillDispatch}
            location={location}
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
          location={location}
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

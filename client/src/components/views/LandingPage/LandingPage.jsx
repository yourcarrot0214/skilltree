import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSkillsDB, selectedSkill } from "../../../_actions/skill_action.js";

import Test from "../../../_reducers/Test.jsx";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";

function LandingPage(props) {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");

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

  return (
    <>
      <h2>Landing Page</h2>
      <Header />
      <SkillSearchBar
        skills={skills}
        selectedSkills={selectedSkills}
        unSelectedSkills={unSelectedSkills}
        skillSearchResult={skillSearchResult}
        setSkillName={setSkillName}
        SkillName={SkillName}
        skillDispatch={skillDispatch}
      />

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

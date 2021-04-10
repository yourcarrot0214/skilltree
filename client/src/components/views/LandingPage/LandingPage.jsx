import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getSkillsDB } from "../../../_actions/skill_action.js";

import Test from "../../../_reducers/Test.jsx";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import TagContainer from "../../common/TagContainer.jsx";

function LandingPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkillsDB());
  }, [dispatch]);

  const skills = useSelector((state) => state.skills, shallowEqual);
  const location = "LandingPage";

  return (
    <>
      <h2>Landing Page</h2>
      <Header />
      <SkillSearchBar />
      <TagContainer skills={skills} location={location} />
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

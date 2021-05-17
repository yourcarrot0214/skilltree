import React from "react";
import { withRouter } from "react-router-dom";

import Test from "../../../_reducers/Test.jsx";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";

function LandingPage() {
  return (
    <>
      <h2>Landing Page</h2>
      <Header />
      <SkillSearchBar selected={true} />
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

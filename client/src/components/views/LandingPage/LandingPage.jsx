import React from "react";
import { withRouter } from "react-router-dom";

import Header from "./Header.jsx";
import SkillSearchBar from "../../common/SkillSearchBar.jsx";
import TagContainer from "../../common/TagContainer.jsx";

function LandingPage(props) {
  return (
    <>
      <h2>Landing Page</h2>
      <Header />
      <SkillSearchBar />
      <TagContainer />
    </>
  );
}

export default withRouter(LandingPage);

/*
  기능구현

  1. header section
    - title
    - sub title
    - skill search bar
    - skill tag
  
  2. Project preview
    - project list => card section
    - project main 바로가기 버튼
    - project 4개 출력, more 버튼 클릭시 4개 추가 출력
  
  3. Study preview
    - study list => card section
    - study main 바로가기 버튼
    - study 4개 출력, more 버튼 클릭시 4개 추가 출력
*/

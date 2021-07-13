import React from "react";
import { withRouter } from "react-router-dom";
import { LandingPageContainer } from "./styles/styled.js";

import Test from "../../../_reducers/Test.jsx";
import Header from "./Header.jsx";

function LandingPage() {
  return (
    <LandingPageContainer>
      <Header
        title='가르치고 배우며 함께 성장합니다.'
        subTitle='배우고 싶은 스킬로 스터디에 참가하고, 다룰 수 있는 스킬로 프로젝트에 참가하세요!'
      />
      <Test />
    </LandingPageContainer>
  );
}

export default withRouter(LandingPage);

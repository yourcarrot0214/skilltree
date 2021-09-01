import React from "react";
import { withRouter, Link } from "react-router-dom";
import { LandingPageContainer, LinkBox } from "./styles/styled.js";

import {
  SKILL_INFO,
  PROJECT_INFO,
  STUDY_INFO,
  BANNER_HEAD,
  HEADER_CONTENTS,
} from "./config/sectionInfo.js";

import Header from "./Header.jsx";
import Banner from "./Banner.jsx";

import bannerImage1 from "./images/banner1-image.jpeg";
import skillImage from "./images/skills-image.png";
import projectImage from "./images/project-image.jpeg";
import studyImage from "./images/study-image.png";

import useUserData from "../../hooks/useUserData";

function LandingPage() {
  const userData = useUserData();
  return (
    <LandingPageContainer>
      <Header
        title={HEADER_CONTENTS.title}
        subTitle={HEADER_CONTENTS.subTitle}
        userData={userData}
      />
      <Banner
        bannerTitle={BANNER_HEAD.title}
        bannerSubTitle1={BANNER_HEAD.subtitle1}
        bannerSubTitle2={BANNER_HEAD.subtitle2}
        image={bannerImage1}
      />
      <Banner
        bannerTitle={SKILL_INFO.title}
        bannerSubTitle1={SKILL_INFO.description}
        bannerSubTitle2={
          <LinkBox>
            <Link to={SKILL_INFO.linkTo}>바로가기</Link>
          </LinkBox>
        }
        image={skillImage}
      />
      <Banner
        bannerTitle={PROJECT_INFO.title}
        bannerSubTitle1={PROJECT_INFO.description}
        bannerSubTitle2={
          <LinkBox>
            <Link to={PROJECT_INFO.linkTo}>바로가기</Link>
          </LinkBox>
        }
        image={projectImage}
      />
      <Banner
        bannerTitle={STUDY_INFO.title}
        bannerSubTitle1={STUDY_INFO.description}
        bannerSubTitle2={
          <LinkBox>
            <Link to={STUDY_INFO.linkTo}>바로가기</Link>
          </LinkBox>
        }
        image={studyImage}
      />
    </LandingPageContainer>
  );
}

export default withRouter(LandingPage);

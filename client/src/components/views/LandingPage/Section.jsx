import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  SectionBox,
  SectionTitle,
  SectionDescription,
  LinkBox,
} from "./styles/styled.js";

const Section = ({ info }) => {
  const { title, description, linkTo } = info;
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <LinkBox>
        <Link to={linkTo}>바로가기</Link>
      </LinkBox>
    </SectionBox>
  );
};

export default withRouter(Section);

import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  SectionBox,
  SectionTitle,
  SectionDescription,
  LinkBox,
} from "./styles/styled.js";

const Section = (props) => {
  const { title, description, linkTo } = props.info;
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

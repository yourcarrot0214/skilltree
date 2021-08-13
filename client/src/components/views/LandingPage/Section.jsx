import React from "react";
import PropTypes from "prop-types";
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

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkTo: PropTypes.string,
};

export default withRouter(Section);

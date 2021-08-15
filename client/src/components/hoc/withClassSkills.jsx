import React from "react";
import { useDispatch } from "react-redux";
import { selectedSkill } from "../../_actions/skill_action";

export default function withClassSkills(WrappedComponent) {
  function WithSelectedDispatch({ skills, ...otherProps }) {
    const dispatch = useDispatch();
    skills.forEach((skill) => dispatch(selectedSkill(skill._id)));
    return <WrappedComponent {...otherProps} />;
  }

  return WithSelectedDispatch;
}

import React from "react";
// import { useDispatch } from "react-redux";
import { updateProject } from "../../_actions/project_action";
import { updateStudy } from "../../_actions/study_action";
// import { selectedSkill } from "../../_actions/skill_action";

export default function withUpdateForm(WrappedComponent) {
  function WithForm({ location, classSkills, ...otherProps }) {
    // const dispatch = useDispatch();
    // classSkills.forEach((skill) => dispatch(selectedSkill(skill._id)));
    if (location === "Project") {
      return (
        <WrappedComponent
          location='프로젝트'
          updateDispatch={updateProject}
          classSkills={classSkills}
          {...otherProps}
        />
      );
    } else if (location === "Study") {
      return (
        <WrappedComponent
          location='스터디'
          updateDispatch={updateStudy}
          classSkills={classSkills}
          {...otherProps}
        />
      );
    }
  }

  return WithForm;
}

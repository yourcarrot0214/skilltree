import React from "react";
import { updateProject } from "../../_actions/project_action";
import { updateStudy } from "../../_actions/study_action";

export default function withUpdateForm(WrappedComponent) {
  console.log("withUpdateForm");
  function WithForm({ location, classSkills, ...otherProps }) {
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

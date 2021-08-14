import React from "react";
import { updateProject } from "../../_actions/project_action";
import { updateStudy } from "../../_actions/study_action";

// updateWithProjectForm;
// updateWithStudyForm;

export default function withUpdateForm(WrappedComponent) {
  function WithForm({ location, ...otherProps }) {
    if (location === "Project") {
      return (
        <WrappedComponent
          location='프로젝트'
          updateDispatch={updateProject}
          {...otherProps}
        />
      );
    } else if (location === "Study") {
      return (
        <WrappedComponent
          location='스터디'
          updateDispatch={updateStudy}
          {...otherProps}
        />
      );
    }
  }

  return WithForm;
}

/*
  1. UpdateClassForm 구조 변경
    - props list
      - location => delete
      - title
      - description
      - personnel
      - submitAddFunction => setComponentToggle
      - id
      - status
    - props add
      - updateClass => updateProject / updateStudy
        : onUpdateClass에서 사용될 dispatch 함수
      - formTitle : 프로젝트 / 스터디
        : h3, label 적용
*/

import React from "react";

export default function withUpdate(WrappedComponent) {
  function WithUpdateForm({ location, ...otherProps }) {
    if (location) {
      return <WrappedComponent />;
    }
  }
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
        : h3 부분에 적용
*/

import React from "react";

export const injectionProps = (props) => (Component) => {
  return <Component hoc={true} {...props} />;
};

/*
  1. currying
    - 함수
    - 인자 : TagContainer가 Tag 컴포넌트를 호출할 때 필요한 props 정보를 담은 객체
    - 역할 : component에 해당 인자값 전달
    - 목적 : currying 함수에 전달되는 값에 따라 다른 역할을 수행하는 Tag 컴포넌트 반복 출력
*/

/*
  2. TagContainer, Tag 컴포넌트 props 수정
    - TagContainer
      > Tag 컴포넌트를 출력하기 위한 skills 정보만 필요.
      > skills 정보는 currying 함수를 호출하는 컴포넌트에서 정의되어 전달됨으로
        Tag 컴포넌트를 출력하고, props로 전달받은 정보, 기능들을 Tag에 전달하는 기능만 수행
    - Tag
      > skill 개별 정보들을 필요로 함.
      > 객체 정보로 넘기고 내부에서 구조분해로 출력, 함수 기능을 설정
      > Modal
*/

/*
  TagContainer, Tag 컴포넌트를 hoc를 통해 기능을 확장하기 위해서는
  props에 대한 정의가 필요.
  skills
  onClickFunction
*/

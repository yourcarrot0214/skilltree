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
  TagContainer
    - props로 전달받은 skills 배열을 통해 Tag 컴포넌트 출력
    - Tag 컴포넌트로 전달할 method props가 많음
      > setSkillsName, setSelectedSkillId, addTech, addLearn
      > hoc를 방해하는 중..
  
  Tag
    - skill 정보를 button 형식으로 출력하는 컴포넌트
    - Modal, onSubmit 등 부가적인 기능을 너무많이 포함하고 있음.
      > hoc를 방해하는 중..
    - onClickFunction을 한개로 통일.
      > onClick 이벤트시 Modal 팝업에 모달에서 또 onClick 이벤트를 두개나 선택해야됨.
      > button onClick => Modal pop-up
      > Modal onClick => props.onClick
      > Modal header => props.header
      > Modal children => props.children

  hoc
    - TagContainer에 부가적인 기능을 부여하려고 하는데 그게 무엇인가?
      > 생각해보니 없음.
      > TagContainer는 단순히 Tag 컴포넌트를 출력하는 프레임에 불과함.
      > 부가적인 기능을 부여해야 하는건 Tag 컴포넌트.
      > Tag 컴포넌트 기능 덜어내기.
*/

import React from "react";

export default function withTagHOC(Component) {
  function composed(props) {
    console.log(props);
    return <Component hoc={true} />;
  }

  return composed;
}

/*
  TagContainer를 인자로 받아 추가 기능을 갖춘 컴포넌트를 반환한다.
  
  본래의 기능
    - props로 받은 skills 배열을 통해 Tag 컴포넌트를 출력한다.

  수정해야될 부분
    - props로 받는 메서드.
    - 본래의 기능에 hoc 내부에서 출력 위치에 따라 각기 다른 메서드를 추가한 컴포넌트를 반환한다.
    - TagContainer가 rendering 되는 LandingPage, ProfileMain에서 동일한 출력기능과
      다른 버튼 기능을 갖도록 구현한다.
*/

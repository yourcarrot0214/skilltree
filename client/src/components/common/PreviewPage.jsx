import React from "react";

const PreviewPage = () => {
  return (
    <>
      <h3>PreviewPage</h3>
    </>
  );
};

export default PreviewPage;

/*
  Preview Page
    - LandingPage에서 사용하게 될 Component
    - props로 전달되는 category(예정)값에 따라 Project, Study Preview Page로 사용될 예정.
    - 'project', 'study' 등 명칭이 사용되는 곳을 category 값에 따라 상수로 정의하여 사용.

  기능구현목표
    1. DB에 저장된 Project 데이터에 접근해서 정보를 가져온다.
    2. 가져온 정보를 card 형식으로 4개씩 출력한다.
    3. more 버튼을 클릭시 4개씩 추가로 출력한다.
    4. serarch bar에서 검색한 스킬명이 포함된 Project들을 출력한다.
*/

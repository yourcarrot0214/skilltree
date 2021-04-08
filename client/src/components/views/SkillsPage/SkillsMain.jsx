import React from "react";

const SkillsMain = () => {
  return (
    <>
      <h3>Skills Main Page</h3>
      <p>Skills page</p>
    </>
  );
};

export default SkillsMain;

/*
  1. 검색영역
    - <SkillsSearch>
    - 데이터 베이스에 있는 skill들을 검색하여 해당 skill을 출력 영역에 전달한다.
    - 출력 영역은 태그에 따라 frontend, backend, utility 영역으로 구분한다.
    
  2. 검색결과 출력 영역
    - <SkillsList>
    - 검색 결과를 전달받아 해당 결과를 출력한다.
      - <TechnicianUsers>
      - 해당 기술을 보유한 유저들의 목록을 출력한다.
      - <LearningUsers>
      - 해당 기술을 배우려는 유저들의 목록을 출력한다.

  3. Side Menu
    - 기술들의 리스트를 출력한다.
    - 해당 기술을 클릭하면 검색 결과를 <SkillsList>에서 출력한다.

*/

/*
  router setup
  axios.get("/api/skills/search")
  app.get("/api.skills/search")
*/

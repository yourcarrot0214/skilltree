import React from "react";
import { withRouter } from "react-router-dom";

import DetailPage from "../../common/DetailPage.jsx";

const ProjectMain = () => {
  return (
    <>
      <h3>Project Main Page</h3>
      <DetailPage />
    </>
  );
};

export default withRouter(ProjectMain);

/*
  기능구현
  > project, study는 공통 컴포넌트를 사용하며 props에 의해서 같은 양식의 다른 결과만 출력한다.
  > 상세 페이지도 마찬가지로 공통 컴포넌트를 사용한다.
  1. 검색창
    - 검색은 skill name으로 한다.
    - axios.get('/api/project/search')
    - 받아온 결과를 출력 컴포넌트에 전달한다.

  2. 결과출력
    - 검색창에서 전달받은 skill이 포함된 프로젝트들을 카드형식으로 출력한다.
    - 모집중인 프로젝트, 진행중인 프로젝트 영역으로 구분하여 출력한다.
    - 프로젝트 카드를 클릭하면 프로젝트 상세 페이지로 이동한다.(modal 형식으로)
    
  3. 프로젝트 상세 페이지
    - 프로젝트 상세 페이지에는 제목, 모집설명, 기술스택, 신청중인인원, 참여중인인원을 출력한다.
    - 프로젝트를 개설한 유저는 다음의 권한을 갖는다.
      > 프로젝트 삭제
      > 신청 유저 수락, 반려
      > 진행중으로 전환, 모집중으로 전환
    - 프로젝트에 참가하려는 유저는 다음의 권한을 갖는다.
      > 프로젝트 참가 신청
      > 프로젝트 참가 신청 취소

*/

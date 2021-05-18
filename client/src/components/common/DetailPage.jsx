import React from "react";
import CreateClassForm from "./CreateClassForm.jsx";

// import SkillSearchBar from "./SkillSearchBar.jsx";

const DetailPage = () => {
  // create project form => CreateClassForm
  // project, study 정보를 db로부터 받아오는 axios, dispatch 기능
  // 받아온 정보를 화면에 출력하는 jsx, styled

  return (
    <>
      <h3>Detail Page</h3>
      {/* <SkillSearchBar selected={true} /> */}
      <CreateClassForm />
    </>
  );
};

export default DetailPage;

/*
  Detail Page
    - Project, Study의 MainPage로 재사용 되는 컴포넌트.
    - props : {
        title: Page Title,
    }

  기능구현목표
    - 스킬검색기능
    - 프로젝트 생성 입력 폼
      > 로그인한 유저 정보 => leader,
      > Project model에 저장할 정보 생성.
    - 모집중인 프로젝트 목록
      > 모집중인 프로젝트 전체 목록 출력
      > 검색된 스킬이 포함된 프로젝트 목록 출력
    - 진행중인 프로젝트 목록
      > 진행중인 프로젝트 전체 목록 출력
      > 검색된 스킬이 포함된 프로젝트 목록 출력
    - 프로젝트 상세 페이지 => InfoPage, common
      > leader : status 변경 권한, volunteer 선택 권한. 프로젝트 삭제 권한.
      > user : 프로젝트 참가 신청, 신청 취소, 프로젝트 탈퇴

*/

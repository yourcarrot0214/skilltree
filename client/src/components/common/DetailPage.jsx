import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { selectedSkill } from "../../_actions/skill_action.js";

import SkillSearchBar from "./SkillSearchBar.jsx";
import TagContainer from "./TagContainer.jsx";
import Tag from "./Tag.jsx";

const DetailPage = () => {
  const dispatch = useDispatch();
  const [SkillName, setSkillName] = useState("");

  const skills = useSelector((state) => state.skills, shallowEqual);
  const selectedSkills = skills.filter((skill) => skill.selected);
  const unSelectedSkills = skills.filter((skill) => !skill.selected);
  const skillSearchResult = skills.find(
    (skill) => skill.name === SkillName.toUpperCase()
  );
  const skillDispatch = (id) => dispatch(selectedSkill(id));

  const onSkillSearch = (event) => {
    event.preventDefault();
    if (SkillName === "") return;
    if (skillSearchResult === undefined) return;

    skillDispatch(skillSearchResult._id);
    setSkillName("");
  };

  const onClickFunction = (e) => {
    const skillId = e.target.id;
    dispatch(selectedSkill(skillId));
  };
  console.log(selectedSkills);

  return (
    <>
      <h3>Detail Page</h3>
      <SkillSearchBar
        setSkillName={setSkillName}
        SkillName={SkillName}
        onSkillSearch={onSkillSearch}
      />
      {SkillName === "" ? (
        <>
          <TagContainer
            skills={selectedSkills}
            onClickFunction={onClickFunction}
            selected={true}
          />
          <TagContainer
            skills={unSelectedSkills}
            onClickFunction={onClickFunction}
            selected={false}
          />
        </>
      ) : skillSearchResult ? (
        <Tag
          skillInfo={skillSearchResult}
          key={skillSearchResult.key}
          onClickFunction={onClickFunction}
          selected={skillSearchResult.selected}
        />
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
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

import React from "react";

const HeaderTitle = "가르치고 배우며 함께 성장합니다.";
const SubTitle =
  "배우고 싶은 스킬로 스터디에 참가하고, 다룰 수 있는 스킬로 프로젝트에 참가하세요!";

const Header = () => {
  return (
    <>
      <h1>{HeaderTitle}</h1>
      <p>{SubTitle}</p>
      <p>skill search bar component</p>
      <p>skill tag component</p>
    </>
  );
};

export default Header;

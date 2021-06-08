import React from "react";
import {
  ClassCardThumbNail,
  ClassTitle,
  ClassDescription,
  ClassLeader,
  ClassPersonnel,
  ClassStatus,
} from "./styles/styled.js";
import TagContainer from "./TagContainer.jsx";

const ClassCard = (props) => {
  const {
    id,
    title,
    description,
    skills,
    leader,
    personnel,
    membersLength,
    status,
  } = props;

  const onClickFunction = () => {
    console.log("ClassCard onClickFunction.");
  };

  return (
    <>
      <ClassCardThumbNail id={id}>
        <ClassTitle>{title}</ClassTitle>
        <ClassDescription>{description}</ClassDescription>
        <TagContainer
          skills={skills}
          selected={true}
          onClickFunction={onClickFunction}
        />
        <ClassLeader>{`리더 : ${leader}`}</ClassLeader>
        <ClassPersonnel>{`모집인원 : ${membersLength} / ${personnel}`}</ClassPersonnel>
        <ClassStatus>{status ? "진행중" : "모집중"}</ClassStatus>
      </ClassCardThumbNail>
    </>
  );
};

export default ClassCard;

/*
  ClassCard
  Project, Study 정보를 썸네일 형식으로 출력하는 컴포넌트.
  부모 컴포너트로부터 필요한 props를 전달받아 출력한다.
  onClickFunction으로 해당 Project, Study 정보를 modal popup으로 출력한다.


*/

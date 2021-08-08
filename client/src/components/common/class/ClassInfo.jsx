import React from "react";
import PropTypes from "prop-types";
import TagContainer from "../TagContainer.jsx";
import { ClassInfoStyled } from "../styles/styled.js";

const ClassInfo = (props) => {
  const {
    id,
    title,
    description,
    skills,
    leaderName,
    personnel,
    members,
    status,
  } = props;

  const onClickFunction = () => {
    console.log("ClassInfo skillTag onClickFunction.");
  };
  return (
    <ClassInfoStyled id={id}>
      <div>
        <span>제목</span>
        <p>{title}</p>
        <span>리더</span>
        <p>{leaderName}</p>
        <span>설명</span>
        <p>{description}</p>
        <span>스킬</span>
        <TagContainer
          skills={skills}
          selected={true}
          onClickFunction={onClickFunction}
        />
        <span>모집인원</span>
        <p>{`${members.length} / ${personnel}`}</p>
        <span>현재상태</span>
        <p>{status ? "진행중" : "모집중"}</p>
      </div>
    </ClassInfoStyled>
  );
};

ClassInfo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  leaderName: PropTypes.string,
  personnel: PropTypes.number,
  members: PropTypes.array,
  status: PropTypes.bool,
};

export default ClassInfo;

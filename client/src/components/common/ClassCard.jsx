import React, { useState, useEffect } from "react";
import axios from "axios";
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

  const [leaderName, setLeaderName] = useState("DB 로딩중!");

  const onClickFunction = () => {
    console.log("ClassCard onClickFunction.");
  };

  useEffect(() => {
    axios
      .post("/api/users/get/name", { _id: leader })
      .then((response) => setLeaderName(response.data.userName));
  });

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
        <ClassLeader>{`리더 : ${leaderName}`}</ClassLeader>
        <ClassPersonnel>{`모집인원 : ${membersLength} / ${personnel}`}</ClassPersonnel>
        <ClassStatus>{status ? "진행중" : "모집중"}</ClassStatus>
      </ClassCardThumbNail>
    </>
  );
};

export default ClassCard;

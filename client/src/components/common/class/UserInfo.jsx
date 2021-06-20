import React, { useState } from "react";
import TagContainer from "../TagContainer.jsx";

const UserInfo = ({ userInfo }) => {
  const [userName, setUserName] = useState(userInfo.name);
  const [tech, setTech] = useState(userInfo.tech);
  const [learn, setLearn] = useState(userInfo.learn);

  return (
    <>
      <div>{`이름 : ${userName}`}</div>
      <div>Tech</div>
      <TagContainer skills={tech} selected />
      <div>Learn</div>
      <TagContainer skills={learn} selected />
    </>
  );
};

export default UserInfo;

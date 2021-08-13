import React, { useState } from "react";
import PropTypes from "prop-types";
import TagContainer from "../TagContainer.jsx";

const UserInfo = ({ userInfo }) => {
  const [userName] = useState(userInfo.name);
  const [tech] = useState(userInfo.tech);
  const [learn] = useState(userInfo.learn);

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

UserInfo.propTypes = {
  userInfo: PropTypes.object,
};

export default UserInfo;

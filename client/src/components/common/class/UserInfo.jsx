import React, { useState } from "react";
import PropTypes from "prop-types";
import TagContainer from "../TagContainer.jsx";
import { UserInfoName, UserInfoMenu } from "../styles/styled";

const UserInfo = ({ userInfo }) => {
  const [userName] = useState(userInfo.name);
  const [tech] = useState(userInfo.tech);
  const [learn] = useState(userInfo.learn);

  return (
    <>
      <UserInfoName>{userName}</UserInfoName>
      <UserInfoMenu>보유중인 스킬</UserInfoMenu>
      <TagContainer skills={tech} selected />
      <UserInfoMenu>학습중인 스킬</UserInfoMenu>
      <TagContainer skills={learn} selected />
    </>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.object,
};

export default UserInfo;

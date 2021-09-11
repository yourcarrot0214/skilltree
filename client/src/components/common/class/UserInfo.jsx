import React, { useState } from "react";
import PropTypes from "prop-types";
import TagContainer from "../TagContainer.jsx";
import { UserInfoStyled } from "../styles/styled";

const UserInfo = ({ userInfo }) => {
  const [userName] = useState(userInfo.name);
  const [tech] = useState(userInfo.tech);
  const [learn] = useState(userInfo.learn);

  return (
    <UserInfoStyled>
      <div className='user-info-name'>{userName}</div>
      <div className='user-info-menu'>보유중인 스킬</div>
      <TagContainer skills={tech} selected />
      <div className='user-info-menu'>학습중인 스킬</div>
      <TagContainer skills={learn} selected />
    </UserInfoStyled>
  );
};

UserInfo.propTypes = {
  userInfo: PropTypes.object,
};

export default UserInfo;

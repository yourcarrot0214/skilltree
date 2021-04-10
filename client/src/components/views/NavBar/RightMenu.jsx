import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action.js";
import styled from "styled-components";

const RightMenuContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  /* flex: 3; */
  font-weight: bold;
`;

const LinkBox = styled.div`
  margin-right: 16px;
  width: 100%;
  height: 100%;
  background: tomato;
  text-align: center;
  a {
    text-decoration: none;
  }
`;

const RightMenu = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => ({
    ...state.user.userData,
  }));
  const { isAdmin, isAuth } = userData;

  const onClickLogoutButton = () => {
    dispatch(logoutUser()).then((response) => {
      console.log(response);
      props.history.push("/login");
    });
  };

  const rightMenuViewer = (isAdmin, isAuth) => {
    if (!isAdmin && !isAuth) {
      return (
        <>
          <LinkBox>
            <Link to='/register'>Sign Up</Link>
          </LinkBox>
          <LinkBox>
            <Link to='/login'>Log In</Link>
          </LinkBox>
        </>
      );
    } else if (isAuth) {
      if (isAdmin) {
        return (
          <>
            <LinkBox>
              <Link to='/profile'>Profile</Link>
            </LinkBox>
            <LinkBox>
              <div onClick={onClickLogoutButton}>Log Out</div>
            </LinkBox>
            <LinkBox>
              <Link to='/admin'>Admin</Link>
            </LinkBox>
          </>
        );
      } else {
        return (
          <>
            <LinkBox>
              <Link to='/profile'>Profile</Link>
            </LinkBox>
            <LinkBox>
              <div onClick={onClickLogoutButton}>Log Out</div>
            </LinkBox>
          </>
        );
      }
    }
    return <div>Something is Wrong.</div>;
  };

  return (
    <RightMenuContainer>{rightMenuViewer(isAdmin, isAuth)}</RightMenuContainer>
  );
};

export default withRouter(RightMenu);

/*
  인증 권한에 따라 Menu component 출력
  1. 로그인 하지 않은 유저.
    - SignUp, LogIn
      > isAdmin === false && isAuth === false
      > !isAdmin && !isAuth
      > 관리자가 아니고 인증도 받지 않은 유저
  2. 로그인 한 유저
  - Profile, Logout
  > isAuth === true
  3. 로그인 한 유저 중 관리자인 유저
    - Profile, Logout, Admin Page
      > isAdmin && isAuth
*/

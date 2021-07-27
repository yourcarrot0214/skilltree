import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action.js";
import { RightMenuContainer, LinkBox } from "./styles/styled.js";

const RightMenu = (props) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => ({
    ...state.user.userData,
  }));
  const { isAdmin, isAuth } = userData;

  const onClickLogoutButton = () => {
    props.displayToggle();
    dispatch(logoutUser()).then((response) => {
      props.history.push("/login");
    });
  };

  const rightMenuViewer = (isAdmin, isAuth) => {
    if (!isAdmin && !isAuth) {
      return (
        <>
          <LinkBox>
            <Link to='/register' onClick={props.displayToggle}>
              Sign Up
            </Link>
          </LinkBox>
          <LinkBox>
            <Link to='/login' onClick={props.displayToggle}>
              Log In
            </Link>
          </LinkBox>
        </>
      );
    } else if (isAuth) {
      if (isAdmin) {
        return (
          <>
            <LinkBox>
              <Link to='/profile' onClick={props.displayToggle}>
                Profile
              </Link>
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
              <Link to='/profile' onClick={props.displayToggle}>
                Profile
              </Link>
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

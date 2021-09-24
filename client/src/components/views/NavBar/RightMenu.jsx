import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action.js";
import { RightMenuContainer, LinkBox } from "./styles/styled.js";
import useUserData from "../../hooks/useUserData.js";
import { FcLock, FcInvite, FcSettings } from "react-icons/fc";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";

const RightMenu = (props) => {
  const dispatch = useDispatch();
  const userData = useUserData();
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
            <FcInvite style={{ color: "#1890ff", fontSize: "24px" }} />
            <Link to='/register' onClick={props.displayToggle}>
              Sign Up
            </Link>
          </LinkBox>
          <LinkBox>
            <BiLogInCircle style={{ color: "#1890ff", fontSize: "24px" }} />
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
              <FcSettings style={{ color: "#1890ff", fontSize: "24px" }} />
              <Link to='/profile' onClick={props.displayToggle}>
                Profile
              </Link>
            </LinkBox>
            <LinkBox>
              <BiLogOutCircle style={{ color: "#d4380d", fontSize: "24px" }} />
              <div onClick={onClickLogoutButton}>Log Out</div>
            </LinkBox>
            <LinkBox>
              <FcLock style={{ fontSize: "24px" }} />
              <Link to='/admin'>Admin</Link>
            </LinkBox>
          </>
        );
      } else {
        return (
          <>
            <LinkBox>
              <FcSettings style={{ color: "#1890ff", fontSize: "24px" }} />
              <Link to='/profile' onClick={props.displayToggle}>
                Profile
              </Link>
            </LinkBox>
            <LinkBox>
              <BiLogOutCircle style={{ color: "#d4380d", fontSize: "24px" }} />
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

RightMenu.propTypes = {
  displayToggle: PropTypes.func,
};

export default withRouter(RightMenu);

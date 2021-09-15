import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../_actions/user_action.js";
import { RightMenuContainer, LinkBox } from "./styles/styled.js";
import useUserData from "../../hooks/useUserData.js";
import "boxicons";

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
            <box-icon
              type='solid'
              name='id-card'
              color='#1890ff'
              size='sm'
            ></box-icon>
            <Link to='/register' onClick={props.displayToggle}>
              Sign Up
            </Link>
          </LinkBox>
          <LinkBox>
            <box-icon name='log-in-circle' color='#1890ff' size='sm'></box-icon>
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
              <box-icon
                type='solid'
                name='user-rectangle'
                color='#1890ff'
                size='sm'
              ></box-icon>
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
              <box-icon
                type='solid'
                name='user-rectangle'
                color='#1890ff'
                size='sm'
              ></box-icon>
              <Link to='/profile' onClick={props.displayToggle}>
                Profile
              </Link>
            </LinkBox>
            <LinkBox>
              <box-icon
                name='log-out-circle'
                color='#ff4d4f'
                size='sm'
              ></box-icon>
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

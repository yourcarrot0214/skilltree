import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action.js";

export default function Auth(Component, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then(async (response) => {
        // login 하지 않은 상태
        if (await !response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          // login 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);

    return <Component />;
  }

  return AuthenticationCheck;
}

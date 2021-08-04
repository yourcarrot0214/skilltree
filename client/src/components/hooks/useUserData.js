import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { auth } from "../../_actions/user_action.js";

const useUserData = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.userData, shallowEqual);

  useEffect(() => {
    auth().then((result) => dispatch(result));
  }, []);

  const userData = userState ?? {
    isAuth: null,
    project: {
      apply: [],
      member: [],
      leader: [],
    },
    study: {
      apply: [],
      member: [],
      leader: [],
    },
    tech: [],
    learn: [],
    _id: "",
    name: "",
  };
  return userData;
};

export default useUserData;

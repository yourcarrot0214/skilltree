import { useState, useEffect } from "react";
import axios from "axios";

const useGetUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .post(
        "/api/users/userInfo",
        { _id: userId },
        { cancelToken: source.token }
      )
      .then((response) => {
        setUserInfo(response.data.userInfo);
      })
      .catch((err) => console.log(err));

    return () => {
      source.cancel("axios operation canceled.");
    };
  });

  return userInfo;
};

export default useGetUserInfo;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchUser = async (userId) => {
      try {
        const response = await axios.post(
          "/api/users/userInfo",
          {
            _id: userId,
          },
          { cancelToken: source.token }
        );
        console.log(response);
        setUserInfo(response.data.userInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser(userId);

    return () => {
      source.cancel("getUserInfo request canceled.");
    };
  }, [userId]);

  return userInfo;
};

export default useGetUserInfo;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async (userId) => {
      try {
        const response = await axios.post("/api/users/userInfo", {
          _id: userId,
        });
        console.log(response);
        setUserInfo(response.data.userInfo);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser(userId);
  }, [userId]);

  return userInfo;
};

export default useGetUserInfo;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetUserName = (userId) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .post("/api/users/get/name", { _id: userId })
      .then((response) => setUserName(response.data.userName))
      .catch((err) => console.log(err));
  });

  return userName;
};

export default useGetUserName;

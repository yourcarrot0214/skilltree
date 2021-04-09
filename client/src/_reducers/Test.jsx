import React from "react";
import { useStore } from "react-redux";

const Test = () => {
  const store = useStore();
  store.subscribe(() => console.log(store.getState()));
  return <div>State Data</div>;
};
export default Test;

import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector(state => state.counterReducer.counter)
  return <span style={{ margin: "auto 10px" }}>{counter}</span>;
}

export default Counter;

import React from "react";
import { handleIncrement } from "../redux/actions/counter";
import { useDispatch } from "react-redux";

function IncrementBtn() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(handleIncrement())}>increment</button>;
}

export default IncrementBtn;

import React from "react";
import { useDispatch } from "react-redux";
import { resetPersist } from "../redux/actions/counter";

function ResetPersist() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(resetPersist())}>Reset counter</button>;
}

export default ResetPersist;

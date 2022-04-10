import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const counter_2 = useSelector((state) => state.anotherCounterReducer.counter_2)
  return (
    <div>
      <span style={{ margin: "auto 10px" }}>{counter}</span>
      <span style={{ margin: "auto 10px" }}>{counter_2}</span>
    </div>
  );
}

export default Counter;

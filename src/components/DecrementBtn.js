import React from "react";
import {handleDecrement} from '../redux/actions/counter'
import {useDispatch} from 'react-redux'

function DecrementBtn() {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(handleDecrement())}>decrement</button>;
}

export default DecrementBtn;

const initialState = {
  counter_2: 0,
};

const anotherCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter_2: state.counter_2 + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter_2: state.counter_2 - 1,
      };
    default:
      return state;
  }
};

export default anotherCounterReducer

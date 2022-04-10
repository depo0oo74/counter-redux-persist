export const handleIncrement = () => {
  return (dispatch) => {
    dispatch({
      type: "INCREMENT",
    });
  };
};

export const handleDecrement = () => {
  return (dispatch) => {
    dispatch({
      type: "DECREMENT",
    });
  };
};

export const resetPersist = () => {
  return (dispatch) => {
    dispatch({
      type: "RESET_PERSIST",
    });
  };
};

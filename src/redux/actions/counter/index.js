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
  
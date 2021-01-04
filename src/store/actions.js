const setScoreDown = () => {
  return {
    type: "SCORE_DOWN",
    value: 1,
  };
};

export const scoreDownThunk = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(setScoreDown());
    }, 1000);
  };
};

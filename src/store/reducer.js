const initState = {
  score: 10,
  age: 0,
};

function reducer(state = initState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "SCORE_UP_ASYNC":
      newState.score = newState.score + action.value;
      break;
    case "SCORE_DOWN":
      newState.score = newState.score - action.value;
      break;
    default:
      break;
  }

  return newState;
}

export default reducer;

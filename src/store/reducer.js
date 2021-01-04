const initState = {
  age: 20,
  score: 10,
};

function reducer(state = initState, action) {
  const newState = { ...initState };
  switch (action.type) {
    case "AGE_UP":
      newState.age = newState.age + action.value;
      break;
    case "AGE_DOWN":
      newState.age = newState.age - action.value;
      break;
    case "SCORE_UP":
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

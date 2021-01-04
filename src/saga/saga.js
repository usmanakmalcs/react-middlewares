import { put, delay, takeLatest } from "redux-saga/effects";

function* scoreUpAsync() {
  yield delay(1000);
  yield put({ type: "SCORE_UP_ASYNC", value: 1 });
}

export default function* watchScoreUp() {
  // Take Every will take each action dispatched by user, if you put delay so it will still take all actions
  // yield takeEvery("AGE_UP", ageUpAsync);

  // Take Lates will take latest action dispatched by user, if you put delay so it will update according to latest action
  // Best Advantage of Saga
  yield takeLatest("SCORE_UP", scoreUpAsync);
}

import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { scoreDownThunk } from "./store/actions";

function App(props) {
  const { onScoreDown } = props;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      <div>
        <h3>Score: {state.score}</h3>
        <button onClick={() => dispatch({ type: "SCORE_UP", value: 1 })}>
          {" "}
          Score Up With Saga Delay
        </button>
        <button onClick={onScoreDown}> Score Down With Thunk Delay</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onScoreUp: () => dispatch({ type: "SCORE_UP", value: 1 }),
    onScoreDown: () => dispatch(scoreDownThunk()),
  };
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

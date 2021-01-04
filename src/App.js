import "./App.css";
import { connect } from "react-redux";
import { scoreDownThunk } from "./store/actions";
function App(props) {
  const { score, onScoreDown, onScoreUp } = props;
  return (
    <div className="App">
      <div>
        <h3>Score: {score}</h3>
        <button onClick={onScoreUp}> Score Up With Saga Delay</button>
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

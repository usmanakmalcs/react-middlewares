import "./App.css";
import { connect } from "react-redux";
function App(props) {
  const { score, onScoreDown, onScoreUp } = props;
  return (
    <div className="App">
      <div>
        <h3>Score: {score}</h3>
        <button onClick={onScoreUp}> Score Up </button>
        <button onClick={onScoreDown}> Score Down </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onScoreUp: () => dispatch({ type: "SCORE_UP", value: 1 }),
    onScoreDown: () => dispatch({ type: "SCORE_DOWN", value: 1 }),
  };
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

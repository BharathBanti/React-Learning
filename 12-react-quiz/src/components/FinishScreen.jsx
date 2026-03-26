export default function FinishScreen({
  points,
  maxPossiblePoints,
  dispatch,
}) {
  return (
    <div className="result">
      <p className="result-copy">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} points.
      </p>
      <button
        className="btn btn-restart"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

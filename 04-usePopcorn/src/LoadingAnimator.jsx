function LoadingAnimator({ message = 'Loading...' }) {
  return (
    <div className="loading-animator" role="status" aria-live="polite">
      <div className="loading-spinner" aria-hidden="true"></div>
      <p className="loading-message">{message}</p>
    </div>
  );
}

export default LoadingAnimator;

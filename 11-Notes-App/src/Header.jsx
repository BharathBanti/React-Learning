function Header({ notes }) {
  const noteCount = notes.length;

  return (
    <header className="app-header">
      <h1 className="app-title">Notes Studio</h1>
      <div className="note-count-chip" aria-live="polite">
        <span className="note-count-number">{noteCount}</span>
        <span className="note-count-label">
          {noteCount === 1 ? 'note' : 'notes'}
        </span>
      </div>
    </header>
  );
}

export default Header;

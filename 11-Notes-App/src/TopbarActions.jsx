export default function TopbarActions({ onAddNote, onDeleteAll, hasNotes }) {
  function onClickDeleteAll() {
    if (!hasNotes) {
      return;
    }

    const isConfirmed = window.confirm('Delete all notes? This action cannot be undone.');
    if (isConfirmed) {
      onDeleteAll();
    }
  }

  return (
    <div className="topbar-actions">
      <button className="topbar-button" onClick={onAddNote}>
        Add Note
      </button>
      <button
        className="topbar-button topbar-button-delete"
        onClick={onClickDeleteAll}
        disabled={!hasNotes}
      >
        Delete All
      </button>
    </div>
  );
}

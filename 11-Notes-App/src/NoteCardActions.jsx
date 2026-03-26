export default function NoteCardActions({ onEdit, onDelete }) {
  return (
    <div className="note-actions">
      <button className="action-btn action-edit" onClick={onEdit}>
        Edit
      </button>
      <button className="action-btn action-delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

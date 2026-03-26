export default function NoteModal({
  isOpen,
  note,
  mode,
  editTitle,
  editDescription,
  onEditTitleChange,
  onEditDescriptionChange,
  onSaveEdit,
  onSwitchToEdit,
  onClose,
}) {
  if (!isOpen || !note) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={onClose} aria-label="Close note">
          &times;
        </button>

        {mode === 'edit' ? (
          <>
            <h2 className="modal-title">Edit Note</h2>
            <div className="modal-form">
              <input
                className="modal-input"
                type="text"
                value={editTitle}
                onChange={(e) => onEditTitleChange(e.target.value)}
                placeholder="Enter title"
              />
              <textarea
                className="modal-textarea"
                rows={8}
                value={editDescription}
                onChange={(e) => onEditDescriptionChange(e.target.value)}
                placeholder="Enter description"
              />
            </div>
            <div className="modal-footer">
              <button className="modal-btn modal-btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button className="modal-btn modal-btn-primary" onClick={onSaveEdit}>
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="modal-title">{note.title}</h2>
            <p className="modal-description">{note.description}</p>
            <div className="modal-footer">
              <button className="modal-btn modal-btn-primary" onClick={onSwitchToEdit}>
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

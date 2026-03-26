import NoteCardActions from './NoteCardActions';

export default function NoteCard({
  id,
  title,
  description,
  handleDeleteNote,
  handleOpenNoteModal,
  handleOpenEditModal,
}) {
  function onEdit(e) {
    e.stopPropagation();
    handleOpenEditModal();
  }

  function onDelete(e) {
    e.stopPropagation();
    handleDeleteNote(id);
  }

  return (
    <div className="note-card" onClick={handleOpenNoteModal}>
      <h2 className="note-title">{title}</h2>
      <div className="note-description">{description}</div>
      <NoteCardActions onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

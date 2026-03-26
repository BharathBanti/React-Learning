import { useState } from 'react';
import './App.css';
import Topbar from './Topbar';
import NoteCard from './Notecard';
import Header from './Header';
import NoteModal from './NoteModal';

function App() {
  const [noteList, setNoteList] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [noteModalMode, setNoteModalMode] = useState('view');
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  function handleDeleteAll() {
    setNoteList([]);
    handleCloseNoteModal();
  }

  function handleAddNote({ title, description }) {
    if (!title.trim() && !description.trim()) {
      return;
    }

    const newNoteObject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setNoteList((prevNotes) => [...prevNotes, newNoteObject]);
  }

  function handleOpenNoteModal(note) {
    setSelectedNote(note);
    setNoteModalMode('view');
    setIsNoteModalOpen(true);
  }

  function handleOpenEditModal(note) {
    setSelectedNote(note);
    setEditTitle(note.title);
    setEditDescription(note.description);
    setNoteModalMode('edit');
    setIsNoteModalOpen(true);
  }

  function handleSwitchToEditFromView() {
    if (!selectedNote) {
      return;
    }

    setEditTitle(selectedNote.title);
    setEditDescription(selectedNote.description);
    setNoteModalMode('edit');
  }

  function handleSaveEditedNote() {
    if (!selectedNote) {
      return;
    }

    const updatedTitle = editTitle.trim();
    const updatedDescription = editDescription.trim();

    if (!updatedTitle && !updatedDescription) {
      return;
    }

    setNoteList((previous) =>
      previous.map((note) =>
        note.id === selectedNote.id
          ? { ...note, title: updatedTitle, description: updatedDescription }
          : note
      )
    );

    handleCloseNoteModal();
  }

  function handleCloseNoteModal() {
    setIsNoteModalOpen(false);
    setSelectedNote(null);
    setNoteModalMode('view');
    setEditTitle('');
    setEditDescription('');
  }

  function handleDeleteNote(id) {
    setNoteList((previous) => previous.filter((note) => note.id !== id));

    if (selectedNote && selectedNote.id === id) {
      handleCloseNoteModal();
    }
  }

  return (
    <main className="app-shell">
      <section className="app-panel">
        <Header notes={noteList} />
        <Topbar
          handleAddNote={handleAddNote}
          handleDeleteAll={handleDeleteAll}
          hasNotes={noteList.length > 0}
        />
        {noteList.length === 0 ? (
          <div className="empty-notes">
            <p>No notes yet..!</p>
          </div>
        ) : (
          <ul className="notes-grid">
            {noteList.map((note) => {
              return (
                <li key={note.id} className="notes-item">
                  <NoteCard
                    id={note.id}
                    title={note.title}
                    description={note.description}
                    handleDeleteNote={handleDeleteNote}
                    handleOpenNoteModal={() => handleOpenNoteModal(note)}
                    handleOpenEditModal={() => handleOpenEditModal(note)}
                  />
                </li>
              );
            })}
          </ul>
        )}

        <NoteModal
          isOpen={isNoteModalOpen}
          note={selectedNote}
          mode={noteModalMode}
          editTitle={editTitle}
          editDescription={editDescription}
          onEditTitleChange={setEditTitle}
          onEditDescriptionChange={setEditDescription}
          onSaveEdit={handleSaveEditedNote}
          onSwitchToEdit={handleSwitchToEditFromView}
          onClose={handleCloseNoteModal}
        />
      </section>
    </main>
  );
}

export default App;

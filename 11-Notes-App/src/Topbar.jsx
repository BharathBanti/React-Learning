import { useState } from 'react';
import TopbarActions from './TopbarActions';

export default function Topbar({ handleAddNote, handleDeleteAll, hasNotes }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function onAddNote() {
    handleAddNote({ title, description: desc });
    setTitle('');
    setDesc('');
  }

  return (
    <div className="topbar">
      <input
        className="topbar-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        className="topbar-textarea"
        cols={30}
        rows={5}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter description"
      ></textarea>
      <TopbarActions
        onAddNote={onAddNote}
        onDeleteAll={handleDeleteAll}
        hasNotes={hasNotes}
      />
    </div>
  );
}

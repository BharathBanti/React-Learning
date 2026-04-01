import { useState } from 'react';
import Header from './Header';
import InputForm from './InputForm';
import AddNewRecordModal from './AddNewRecordModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [records, setRecords] = useState([]);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleRegisterRecord(formData) {
    const newRecord = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setIsModalOpen(false);
  }

  return (
    <div className="app-shell">
      <Header />
      <InputForm onOpenModal={handleOpenModal} />
      <p className="mx-auto mt-2 w-full max-w-6xl px-1 text-sm font-medium text-slate-600">
        Total Records: {records.length}
      </p>
      <AddNewRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onRegister={handleRegisterRecord}
      />
    </div>
  );
}

export default App;

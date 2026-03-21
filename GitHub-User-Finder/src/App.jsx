import { useState } from 'react';
import useFetchUsers from './components/useFetchUsers';
import './App.css';
import Header from './components/header';
import InputBox from './components/inputBox';
import Results from './components/results';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useFetchUsers(searchTerm);

  return (
    <main className="app-shell">
      <div className="app-shell__glow app-shell__glow--one" />
      <div className="app-shell__glow app-shell__glow--two" />

      <section className="finder-panel">
        <Header />
        <InputBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Results
          data={data}
          loading={loading}
          error={error}
          searchTerm={searchTerm}
        />
      </section>
    </main>
  );
}

export default App;

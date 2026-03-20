import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleCount(){
    return setCount(prevCount => prevCount + 1);
  }

  useEffect(() =>
    console.log('Inside useEffect'), [count]
  )

  return (
    <div className="app">
      <button onClick={handleCount}>{count}</button>
    </div>
  );
}

export default App

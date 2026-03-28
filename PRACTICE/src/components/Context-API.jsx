import { createContext, useContext } from 'react';
import "../App.css";

// 1. Create context
// 2. Provide Data
// 3. Consume Data

// 1. Creating context
const UserContext = createContext();

// 2. Providiing Data
function App() {
  const user = 'Banti';

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <DeepComponent />;
}

function DeepComponent() {
  // 3. Consuming the data
  const user = useContext(UserContext);

  return <h2>Hello {user}!</h2>;
}

export default App;

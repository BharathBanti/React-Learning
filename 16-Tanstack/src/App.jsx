import './App.css';
import Home from './components/Home';
import PostsRQ from './components/PostsRQ';
import PostsTraditional from './components/PostsTraditional';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import RQPostDetails from './components/RQPostDetails';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Traditional Posts</NavLink>
          </li>
          <li>
            <NavLink to="/rq-posts">RQ Posts</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsTraditional />} />
        <Route path="/rq-posts" element={<PostsRQ />} />
        <Route path="/rq-posts/:postId" element={<RQPostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

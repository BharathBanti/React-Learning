import './App.css';
import Home from './components/Home';
import PostsRQ from './components/PostsRQ';
import RQPostDetails from './components/RQPostDetails';
import InfiniteScroll from './components/InfiniteScroll';
import PostsTraditional from './components/PostsTraditional';
import PaginatedQueries from './components/PaginatedQueries';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

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
          <li>
            <NavLink to="/paginated-fruits">Fruits</NavLink>
          </li>
          <li>
            <NavLink to="/infinite-scroll">Infinite Fruits</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsTraditional />} />
        <Route path="/rq-posts" element={<PostsRQ />} />
        <Route path="/rq-posts/:postId" element={<RQPostDetails />} />
        <Route path="/paginated-fruits" element={<PaginatedQueries />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

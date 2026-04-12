import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

function PostsTraditional() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/posts');
      setPosts(res.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred....</div>;
  }

  return (
    <div className='posts-list'>
      {posts.map((post) => <Post post={post} />)}
    </div>
  );
}

export default PostsTraditional;

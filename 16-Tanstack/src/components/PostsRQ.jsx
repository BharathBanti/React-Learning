import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Post from './Post';

function PostsRQ() {
  // query key is ["posts"] in 'http://localhost:3001/posts'
  // query key is ["posts", post.id] in 'http://localhost:3001/posts/1'
  // query key is ["posts", post.id, "comments"] in 'http://localhost:3001/posts/1/comments'
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get('http://localhost:3001/posts');
    },
    // staleTime: 3000,
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
    enabled: false,
  });

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred...., {error.message}</div>;
  }

  return (
    <div className="posts-list">
      <button onClick={refetch}>Fetch Posts</button>
      {data?.data.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default PostsRQ;

// 1. create a RQPostDetails
// 2. configuring the route for thge newly created pages - (rq-posts/{postId})
// 3. wrapping each item with the <a> tag
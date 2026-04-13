import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import Post from './Post';

function PostsRQ() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  // POST method
  function addPost(post) {
    return axios.post('http://localhost:3001/posts', post);
  }

  function handlePost(e) {
    e.preventDefault();

    const post = { title, content };
    mutate(post);
    // addPost(post);
    setTitle('');
    setContent('');
  }

  // query key is ["posts"] in 'http://localhost:3001/posts'
  // query key is ["posts", post.id] in 'http://localhost:3001/posts/1'
  // query key is ["posts", post.id, "comments"] in 'http://localhost:3001/posts/1/comments'
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return axios.get('http://localhost:3001/posts');
    },
    // staleTime: 3000,
    enabled: false,
  });

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newData) => {
      // queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.setQueriesData(['posts'], (oldQueryData => {
        if (!oldQueryData) return oldQueryData;
        return {
          ...oldQueryData,
          data: [...oldQueryData, newData.data]
        }
      }));
    }
  });

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred...., {error.message}</div>;
  }

  return (
    <div className="posts-list">
      <input
        type="text"
        placeholder="Enter the title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Enter the content"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button onClick={handlePost} type="submit">
        Post
      </button>
      <br />
      <button onClick={refetch}>Fetch Posts</button>
      {data?.data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsRQ;

// 1. create a RQPostDetails
// 2. configuring the route for thge newly created pages - (rq-posts/{postId})
// 3. wrapping each item with the <a> tag

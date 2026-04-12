import { NavLink } from 'react-router-dom';

function Post({ post }) {
  return (
    <NavLink to={`/rq-posts/${post.id}`}>
      <div className="post-item">
        <p>{post.id}</p>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-body">{post.content}</p>
      </div>
    </NavLink>
  );
}

export default Post;

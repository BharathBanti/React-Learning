import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useParams } from "react-router-dom"

function RQPostDetails() {

  const {postId} = useParams();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => axios.get(`http://localhost:3001/posts/${postId}`),
  })

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred...., {error.message}</div>;
  }

  const {title, content} = data?.data || 0;

  return (
    <div className="post-details-container">
      <div className="post-details-title">{title}</div>
      <div className="post-details-body">{content}</div>
    </div>
  )
}

export default RQPostDetails

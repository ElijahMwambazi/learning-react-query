import { Post } from "../api/services/Blog.services";

export type PostDetailProps = {
  post: Post;
};

const PostDetail = ({
  post,
}: PostDetailProps) => {
  // replace with useQuery
  const data: Post[] = [];

  return (
    <>
      <h3 style={{ color: "blue" }}>
        {post!.title}
      </h3>
      <button>Delete</button>{" "}
      <button>Update title</button>
      <p>{post!.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment!.id}>
          {comment!.email}: {comment!.body}
        </li>
      ))}
    </>
  );
};

export default PostDetail;

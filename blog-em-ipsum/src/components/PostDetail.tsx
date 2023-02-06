import {
  Post,
  useDeletePost,
  useFetchComments,
  useUpdatePost,
} from "../api/services/Blog.services";

export type PostDetailProps = {
  post: Post;
};

const PostDetail = ({
  post,
}: PostDetailProps) => {
  const { data, isLoading, isError } =
    useFetchComments(post.id);
  const deletePost = useDeletePost(post.id);
  const updatePost = useUpdatePost(post.id);

  const handleUpdatePost = () => {
    updatePost.mutate();
  };

  const handleDeletePost = () => {
    deletePost.mutate();
  };

  return (
    <>
      <div className="post-details-header">
        <h3 className="post-detail-title">
          {post!.title}
        </h3>
        <div className="post-detail-buttons">
          <button onClick={handleUpdatePost}>
            Update title
          </button>
          <button onClick={handleDeletePost}>
            Delete
          </button>{" "}
        </div>
      </div>
      <p className="post-detail-text">
        {post!.body}
      </p>
      <h4 className="post-detail-comments-header">
        Comments
      </h4>
      <ul className="comments">
        {isLoading && <h3>...Loading</h3>}
        {isError && <h3>Error fetching data</h3>}
        {data &&
          data.data.map(
            ({ id, name, email, body }) => (
              <li key={id}>
                <span>{name}</span> ({email}):{" "}
                {body}
              </li>
            )
          )}
      </ul>
    </>
  );
};

export default PostDetail;

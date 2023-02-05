import {
  Post,
  useFetchComments,
} from "../api/services/Blog.services";

export type PostDetailProps = {
  post: Post;
};

const PostDetail = ({
  post,
}: PostDetailProps) => {
  const { data, isLoading, isError } =
    useFetchComments(post.id);

  return (
    <>
      <div className="post-details-header">
        <h3 className="post-detail-title">
          {post!.title}
        </h3>
        <div className="post-detail-buttons">
          <button>Update title</button>
          <button>Delete</button>{" "}
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

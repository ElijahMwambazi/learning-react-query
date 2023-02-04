import { useState } from "react";
import PostDetail from "./PostDetail";
import { useFetchPosts } from "../api/services/Blog.services";
import { Post } from "../api/services/Blog.services";

const maxPostPage = 10;

const Posts = () => {
  const [currentPage, setCurrentPage] =
    useState(0);
  const [selectedPost, setSelectedPost] =
    useState<Post | null>(null);

  const { data, status } = useFetchPosts();

  return (
    <>
      <ul>
        {status === "loading" && (
          <h2>...Loading</h2>
        )}
        {status == "error" && (
          <h2>Error fetching data</h2>
        )}
        {status === "success" &&
          data!.data.map((post: Post) => (
            <li
              key={post!.id}
              className="post-title"
              onClick={() =>
                setSelectedPost(post)
              }
            >
              {post!.title}
            </li>
          ))}
      </ul>
      <div className="pages">
        <button onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && (
        <PostDetail post={selectedPost} />
      )}
    </>
  );
};

export default Posts;

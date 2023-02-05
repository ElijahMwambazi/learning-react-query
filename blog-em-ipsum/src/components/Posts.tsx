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

  const { data, isLoading, isError } =
    useFetchPosts();

  return (
    <>
      <ul>
        {isLoading && <h3>...Loading</h3>}
        {isError && <h3>Error fetching data</h3>}
        {data &&
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
      {selectedPost && (
        <PostDetail post={selectedPost} />
      )}
    </>
  );
};

export default Posts;

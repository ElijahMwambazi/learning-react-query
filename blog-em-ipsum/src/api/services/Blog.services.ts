import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Post = {
  id: number;
  title: string;
  email: string;
  body: string;
};

export type PostsQueryData = {
  data: Post[];
};

export type PostId = Pick<Post, "id">;

export const useFetchPosts = () => {
  return useQuery<PostsQueryData>(
    ["posts"],
    async () =>
      await axios.get<PostsQueryData, any>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
      )
  );
};

export const useFetchComments = (
  postId: PostId
) => {
  return useQuery(["comments"], async () => {
    await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  });
};

export const deletePost = async (
  postId: PostId
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
};

export const updatePost = async (
  postId: PostId
) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    {
      method: "PATCH",
      headers: {
        "Content-type":
          "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "REACT QUERY FOREVER!!!!",
      }),
    }
  );
  return response.json();
};

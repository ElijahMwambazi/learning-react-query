import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ValueOf<T> = T[keyof T];

export type Post = {
  id: number;
  title: string;
  email: string;
  body: string;
};

export type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export type PostsQueryData = {
  data: Post[];
};

export type CommentQueryData = {
  data: Comment[];
};

export type PostId = ValueOf<Pick<Post, "id">>;

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
  return useQuery<CommentQueryData>(
    ["comments", postId],
    async () =>
      await axios.get<CommentQueryData, any>(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      )
  );
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

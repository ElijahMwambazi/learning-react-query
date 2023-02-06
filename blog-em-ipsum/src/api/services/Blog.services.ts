import { useEffect } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import {
  CurrentPage,
  maxPostPage,
} from "../../components/Posts";
import { ValueOf } from "../../utils/types.utils";

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

export type PostQueryData = {
  data: Post;
};

export type CommentQueryData = {
  data: Comment[];
};

export type PostId = ValueOf<Pick<Post, "id">>;

const fetchPosts = async (
  pageNumber: CurrentPage
) =>
  await axios.get<PostsQueryData, any>(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
  );

export const useFetchPosts = (
  pageNumber: CurrentPage
) => {
  return useQuery<PostsQueryData>(
    ["posts", pageNumber],
    () => fetchPosts(pageNumber),
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  );
};

export const usePrefetchPosts = (
  currentPage: CurrentPage,
  maxPage: typeof maxPostPage
) => {
  const queryClient = useQueryClient();

  return useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(
        ["posts", nextPage],
        () => fetchPosts(nextPage)
      );
    }
  }, [currentPage, queryClient]);
};

const fetchComments = async (postId: PostId) =>
  await axios.get<CommentQueryData, any>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

export const useFetchComments = (
  postId: PostId
) => {
  return useQuery<CommentQueryData>(
    ["comments", postId],
    () => fetchComments(postId)
  );
};

const deletePost = async (postId: PostId) =>
  await axios.delete<PostQueryData, any>(
    `https://jsonplaceholder.typicode.com/postId/${postId}`
  );

export const useDeletePost = (postId: PostId) => {
  return useMutation<PostQueryData>(() =>
    deletePost(postId)
  );
};

// export const updatePost = async (
//   postId: PostId
// ) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/postId/${postId}`,
//     {
//       method: "PATCH",
//       headers: {
//         "Content-type":
//           "application/json; charset=UTF-8",
//       },
//       body: JSON.stringify({
//         title: "REACT QUERY FOREVER!!!!",
//       }),
//     }
//   );
//   return response.json();
// };

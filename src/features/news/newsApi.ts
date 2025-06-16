import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "news",
    }),
    getNewsById: builder.query({
      query: (id) => `news/${id}`,
    }),
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetNewsByIdQuery,
  useGetPostsQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetPostByIdQuery,
} = newsApi;

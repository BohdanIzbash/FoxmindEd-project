import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPosts } from "../../types/Posts";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_URL}`,
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPosts[], number>({
      query: (limit = 10) => `posts?limit=${limit}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;

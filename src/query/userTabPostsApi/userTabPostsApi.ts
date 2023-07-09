import { IUserTabPosts } from "@/types/UserTabPosts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userTabPostsApi = createApi({
  reducerPath: "userTabPostsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
  }),
  endpoints: (build) => ({
    getUserPosts: build.query<IUserTabPosts[], string>({
      query: (id = "1") => `/users/${id}/posts`,
    }),
  }),
});

export const { useGetUserPostsQuery } = userTabPostsApi;

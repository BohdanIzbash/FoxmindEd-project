import { IUserTabTodos } from "@/types/UserTabTodos";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userTabTodosApi = createApi({
  reducerPath: "userTabTodosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
  }),
  endpoints: (build) => ({
    getUserTodos: build.query<IUserTabTodos[], string>({
      query: (id = "1") => `/users/${id}/todos`,
    }),
  }),
});

export const { useGetUserTodosQuery } = userTabTodosApi;

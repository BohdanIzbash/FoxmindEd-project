import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodos } from "../../types/Todos";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_URL}`,
  }),
  endpoints: (build) => ({
    getTodos: build.query<ITodos[], number>({
      query: (limit: number = 10) => `/todos?limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;

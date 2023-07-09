import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "@/types/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_URL}`,
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number>({
      query: (limit = 10) => `users?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;

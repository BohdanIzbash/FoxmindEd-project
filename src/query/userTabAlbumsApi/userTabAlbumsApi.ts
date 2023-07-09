import { IUserAlbums } from "@/types/UserAlbums";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userTabAlbumsApi = createApi({
  reducerPath: "userTabAlbumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
  }),
  endpoints: (build) => ({
    getUserAlbums: build.query<IUserAlbums[], string>({
      query: (id = "1") => `/users/${id}/albums`,
    }),
  }),
});

export const { useGetUserAlbumsQuery } = userTabAlbumsApi;

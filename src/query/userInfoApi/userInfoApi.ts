import { IUserInfo } from "@/types/UserInfo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userInfoApi = createApi({
  reducerPath: "userInfoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URL,
  }),
  endpoints: (build) => ({
    getUserInfo: build.query<IUserInfo, string>({
      query: (id = "1") => `/users/${id}`,
    }),
  }),
});

export const { useGetUserInfoQuery } = userInfoApi;

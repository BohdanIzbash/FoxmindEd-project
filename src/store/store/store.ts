import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../query/postsApi";
import { usersApi } from "../../query/usersApi";
import { todosApi } from "../../query/todosApi";
import { userInfoApi } from "@/query/userInfoApi";
import { useDispatch } from "react-redux";
import { userTabAlbumsApi } from "@/query/userTabAlbumsApi/userTabAlbumsApi";
import { userTabTodosApi } from "@/query/userTabTodosApi/userTabTodosApi";
import { userTabPostsApi } from "@/query/userTabPostsApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    [userTabAlbumsApi.reducerPath]: userTabAlbumsApi.reducer,
    [userTabTodosApi.reducerPath]: userTabTodosApi.reducer,
    [userTabPostsApi.reducerPath]: userTabPostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      usersApi.middleware,
      todosApi.middleware,
      userInfoApi.middleware,
      userTabAlbumsApi.middleware,
      userTabTodosApi.middleware,
      userTabPostsApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type TypeRootState = ReturnType<typeof store.getState>;

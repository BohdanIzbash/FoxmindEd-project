import { FC } from "react";
import { PostsList } from "../../components/PostsList";
import styles from "./PostsPage.module.css";
import { useGetPostsQuery } from "@/query/postsApi";
import { AddPosts } from "../../components/AddPosts/AddPosts";

export const PostsPage: FC = () => {
  const { data = [], isLoading } = useGetPostsQuery(10);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className={styles.posts}>
      <AddPosts posts={data} />
      <PostsList posts={data} />
    </div>
  );
};

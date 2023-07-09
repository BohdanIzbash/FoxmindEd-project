import { FC } from "react";
import styles from "./PostsItem.module.css";
import { IPosts } from "@/types/Posts";

interface props {
  post: IPosts;
}

export const PostsItem: FC<props> = ({ post }) => {
  return (
    <div>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.body}>{post.body}</div>
    </div>
  );
};

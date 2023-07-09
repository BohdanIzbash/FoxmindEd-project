import { FC } from "react";
import { PostsItem } from "../PostsItem";
import { IPosts } from "@/types/Posts";

interface props {
  posts: IPosts[];
}

export const PostsList: FC<props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </div>
  );
};

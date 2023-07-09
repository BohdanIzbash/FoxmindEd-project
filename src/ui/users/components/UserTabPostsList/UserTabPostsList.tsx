import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/ui/navigation";
import { IUserTabPosts } from "@/types/UserTabPosts";

interface Props {
  posts: IUserTabPosts[];
}

export const UserTabPostsList: FC<Props> = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            {post.body}
          </li>
        ))}
      </ul>
      <button>
        <Link to={AppRoutes.Users}>Back</Link>
      </button>
    </div>
  );
};

import { FC } from "react";
import { IUser } from "@/types/User";
import { Link } from "react-router-dom";

interface UserItemProps {
  user: IUser;
}
export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <Link to={`${user.id}`}>
        {user.id}. {user.name}. {user.username}
      </Link>
    </div>
  );
};

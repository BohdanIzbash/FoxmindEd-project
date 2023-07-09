import { FC } from "react";
import { UserItem } from "../UserItem";
import styles from "./UserList.module.css";
import { IUser } from "@/types/User";

interface Props {
  users: IUser[];
}

export const UserList: FC<Props> = ({ users }) => {
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <div>
          <UserItem key={user.id} user={user} />
        </div>
      ))}
    </div>
  );
};

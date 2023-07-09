import { FC } from "react";
import { UserList } from "../../components/UserList";
import { useGetUsersQuery } from "@/query/usersApi";

export const UserPage: FC = () => {
  const { data = [], isLoading } = useGetUsersQuery(10);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <UserList users={data} />
    </div>
  );
};

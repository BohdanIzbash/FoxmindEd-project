import { useGetUserTodosQuery } from "@/query/userTabTodosApi";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabTodosList } from "../../components/UserTabTodosList";

export const UserTabTodosPage: FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetUserTodosQuery(params.id!);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <UserTabTodosList todos={data!} />
    </div>
  );
};

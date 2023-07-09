import { FC } from "react";
import { TodoList } from "../../components/TodoList";
import { useGetTodosQuery } from "@/query/todosApi";

export const TodosPage: FC = () => {
  const { data = [], isLoading } = useGetTodosQuery(10);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <TodoList todos={data} />
    </div>
  );
};

import { FC } from "react";
import styles from "./TodoItem.module.css";
import { ITodos } from "@/types/Todos";
import { useAppDispatch } from "@/store";
import { todosApi } from "@/query/todosApi";

interface Props {
  todo: ITodos;
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(
      todosApi.util.updateQueryData("getTodos", 10, (draftTodos) => {
        const foundTodo = draftTodos.find((item) => item.id === todo.id);
        if (foundTodo) {
          foundTodo.completed = !foundTodo.completed;
        }
        return draftTodos;
      })
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={handleClick}
      />
      {todo.id}. {todo.title}.
    </div>
  );
};

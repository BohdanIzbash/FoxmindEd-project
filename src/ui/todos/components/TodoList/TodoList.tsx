import { FC } from "react";
import { TodoItem } from "../TodoItem";
import styles from "./TodoList.module.css";
import { ITodos } from "@/types/Todos";

interface props {
  todos: ITodos[];
}

export const TodoList: FC<props> = ({ todos }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

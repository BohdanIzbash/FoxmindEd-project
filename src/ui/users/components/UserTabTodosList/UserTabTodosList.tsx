import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/ui/navigation";
import { IUserTabTodos } from "@/types/UserTabTodos";
import styles from "./UserTabTodosList.module.css";

interface Props {
  todos: IUserTabTodos[];
}

export const UserTabTodosList: FC<Props> = ({ todos }) => {
  return (
    <div>
      <ul className={styles.userTodos}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            <input
              type="checkbox"
              className={styles.todoCompleted}
              checked={todo.completed}
            />
            {todo.title}
          </li>
        ))}
      </ul>
      <button>
        <Link to={AppRoutes.Users}>Back</Link>
      </button>
    </div>
  );
};

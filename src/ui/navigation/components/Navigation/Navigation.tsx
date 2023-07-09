import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FC } from "react";
import { AppRoutes } from "../../consts";
export const Navigation: FC = () => {
  return (
    <>
      <nav>
        <ul className={styles.nav}>
          <li>
            {" "}
            <Link to={AppRoutes.Users}>Users</Link>
          </li>
          <li>
            {" "}
            <Link to={AppRoutes.Todos}>Todos</Link>
          </li>
          <li>
            {" "}
            <Link to={AppRoutes.Posts}>Posts</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

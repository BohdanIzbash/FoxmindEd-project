import { useGetUserInfoQuery } from "@/query/userInfoApi";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { AppRoutes } from "@/ui/navigation";
import styles from "./UserItemInfo.module.css";

export const UserItemInfo: FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetUserInfoQuery(params.id!);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <ul>
        <li className={styles.userInfo}>
          <div>{data?.email}</div>
          <div className={styles.greyText}>Email</div>
        </li>

        <li className={styles.userInfo}>
          <div>{data?.phone}</div>
          <div className={styles.greyText}>Phone</div>
        </li>

        <li className={styles.userInfo}>
          <div>{data?.address.street}</div>
          <div>{data?.address.suite}</div>
          <div>{data?.address.city}</div>
          <div>{data?.address.zipcode}</div>
          <div className={styles.greyText}>Address</div>
        </li>

        <li className={styles.userInfo}>
          <div>{data?.company.name}</div>
          <div>{data?.company.catchPhrase}</div>
          <div>{data?.company.bs}</div>
          <div className={styles.greyText}>Work</div>
        </li>
      </ul>
      <button className={styles.backBtn}>
        <Link to={AppRoutes.Users}>Back</Link>
      </button>
    </div>
  );
};

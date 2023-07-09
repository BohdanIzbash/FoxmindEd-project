import { useGetUserPostsQuery } from "@/query/userTabPostsApi";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabPostsList } from "../../components/UserTabPostsList";

export const UserTabPostsPage: FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetUserPostsQuery(params.id!);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <UserTabPostsList posts={data!} />
    </div>
  );
};

import { useGetUserAlbumsQuery } from "@/query/userTabAlbumsApi";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabAlbumList } from "../../components/UserTabAlbumList";

export const UserTabAlbumsPage: FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetUserAlbumsQuery(params.id!);
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <UserTabAlbumList albums={data!} />
    </div>
  );
};

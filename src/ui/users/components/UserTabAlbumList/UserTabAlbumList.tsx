import { IUserAlbums } from "@/types/UserAlbums";
import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/ui/navigation";

interface Props {
  albums: IUserAlbums[];
}

export const UserTabAlbumList: FC<Props> = ({ albums }) => {
  return (
    <div>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
      <button>
        <Link to={AppRoutes.Users}>Back</Link>
      </button>
    </div>
  );
};

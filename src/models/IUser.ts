import IMovie from "./IMovie";
import IHistory from "./IHistory";

interface IUser {
  id: string;
  username: string;
  password: string;
  favorites: IMovie[];
  history: IHistory[];
}

export default IUser;
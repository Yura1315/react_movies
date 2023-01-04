import IMovie from "./IMovie";

interface IUser {
  id: string;
  username: string;
  password: string;
  favorites: IMovie[];
  history: string[];
}

export default IUser;

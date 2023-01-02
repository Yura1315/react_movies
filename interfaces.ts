interface IGenres {
  results: string[];
}

interface IMovieImg {
  id: string;
  url: string;
}

interface IMovieDate {
  day: number;
  mounth: number;
  year: number;
}
interface IMovieYear {
  year: number;
  endYear: number;
}
interface IMovieTitle {
  text: string;
  __typename?: string;
}
interface IMovieType {
  id: string;
  isEpisode: boolean;
  isSeries: boolean;
  text: string;
}

interface IMovie {
  id: number;
  primaryImage?: IMovieImg | undefined;
  releaseDate?: IMovieDate;
  releaseYear?: IMovieYear;
  titleText: IMovieTitle;
  titleType: IMovieType;
}

interface ICard {
  id: number;
  name: string;
  imgUrl: string;
}

export type { IGenres, IMovie, ICard };

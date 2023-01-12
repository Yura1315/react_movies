import IMovie from './IMovie';

interface IMovieFetch {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export default IMovieFetch;

import IGenre from "./IGenre";
import IMovie from "./IMovie";
import IProdCompanies from "./IProdCompanies";
import IProdCountries from "./IProdCountries";
import ISpokenLang from "./ISpokenLang";


export interface IOneMoviePage extends IMovie {
  belongs_to_collections: null | any;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: IProdCompanies[];
  production_countries: IProdCountries[];
  ravenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLang[];
  status: string;
  tagline: string | null;
}

export default IOneMoviePage;

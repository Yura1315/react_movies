interface IMovie {
  id: string;
  primaryImage: {
    caption: {
      plainText: 'Darwin Karr and Gertrude McCoy in That Winsome Winnie Smile (1911)',
      __typename: string;
    };
    height: number;
    id: string;
    url: string;
    width: number;
    __typename: string;
  };
  releaseDate: {
    day: number;
    month: number;
    year: number;
    __typename: string;
  };
  releaseYear: {
    endYear: object;
    year: number;
    __typename: string;
  };
  titleText: {
    text: 'That Winsome Winnie Smile';
    __typename: string;
  };
  titleType: {
    id: string;
    isEpisode: boolean;
    isSeries: boolean;
    text: string;
    __typename: string;
  };
}

export default IMovie;

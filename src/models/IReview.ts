interface IReview {
  author: string;
  content: string;
  created_at: string;
  id: string;
  updated_url: string;
  url: string;
}

interface IReviews {
  id: number;
  results: IReview[];
  total_pages: number;
  total_results: number;
}

export type { IReview, IReviews };

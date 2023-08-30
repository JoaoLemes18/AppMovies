export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  runtime: number;
  release_date: string;
  credits: {
    cast: Actor[];
  };
}

export interface Actor {
  id: number;
  name: string;
  profile_path: string;
}

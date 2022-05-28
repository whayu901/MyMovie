interface Payload {
  data?: any;
  error?: any;
  id?: string;
  text?: string;
  page?: number;
}

interface Params {
  type?: string;
  payload?: Payload;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Dispatch = (params: Params | Function | any) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload?: Payload;
}

export interface Reducers {
  movie: MovieState;
}

export interface MovieState {
  listMovieHome: {
    data: any[];
    dataTemp: any[];
    isLoading: boolean;
    error: string;
  };
  listMovieDetail: {
    data: any[];
    dataTemp: any;
    isLoading: boolean;
    error: string;
    moreLoading: boolean;
  };
  detailMovie: {
    isLoading: boolean;
    data: any;
    error: string;
  };
  searchMovie: {
    isLoading: boolean;
    data: any[];
    error: string;
  };
}

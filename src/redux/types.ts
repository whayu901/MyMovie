interface Payload {
  data?: any;
  error?: any;
  id?: string;
  text?: string;
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
  contact: MovieState;
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
    dataTemp: any[];
    isLoading: boolean;
    error: string;
  };
  detailMovie: {
    isLoading: boolean;
    data: any;
    error: string;
  };
}

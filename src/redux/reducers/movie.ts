import { Action, MovieState } from "../types";

const initialState: MovieState = {
  listMovieHome: {
    data: [],
    dataTemp: [],
    isLoading: false,
    error: "",
  },
  listMovieDetail: {
    data: [],
    dataTemp: [],
    isLoading: false,
    error: "",
  },
  detailMovie: {
    isLoading: false,
    data: null,
    error: "",
  },
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "GET_MOVIE_HOME_PENDING": {
      return {
        ...state,
        listMovieHome: {
          ...state.listMovieHome,
          isLoading: false,
          error: state.listMovieHome.error,
        },
      };
    }
    case "GET_MOVIE_HOME_SUCCESS": {
      return {
        ...state,
        listMovieHome: {
          ...state.listMovieHome,
          isLoading: false,
          data: payload?.data,
        },
      };
    }
    case "GET_MOVIE_HOME_ERROR": {
      return {
        ...state,
        listMovieHome: {
          ...state.listMovieHome,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    default: {
      return state;
    }
  }
};

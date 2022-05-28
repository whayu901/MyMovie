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
    moreLoading: false,
  },
  detailMovie: {
    isLoading: false,
    data: null,
    error: "",
  },
  searchMovie: {
    isLoading: false,
    data: [],
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
          isLoading: true,
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
    case "GET_MOVIE_TYPE_PENDING": {
      if (payload?.page === 1) {
        return {
          ...state,
          listMovieDetail: {
            ...state.listMovieDetail,
            isLoading: true,
            error: initialState.listMovieDetail.error,
            data: [],
          },
        };
      } else {
        return {
          ...state,
          listMovieDetail: {
            ...state.listMovieDetail,
            moreLoading: true,
            error: initialState.listMovieDetail.error,
          },
        };
      }
    }
    case "GET_MOVIE_TYPE_SUCCESS": {
      return {
        ...state,
        listMovieDetail: {
          ...state.listMovieDetail,
          isLoading: false,
          moreLoading: false,
          data: [...state.listMovieDetail.data, ...payload?.data],
        },
      };
    }
    case "GET_MOVIE_TYPE_ERROR": {
      return {
        ...state,
        listMovieDetail: {
          ...state.listMovieDetail,
          isLoading: false,
          error: payload?.error,
          moreLoading: false,
        },
      };
    }
    case "GET_MOVIE_DETAIL_PENDING": {
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          isLoading: true,
          error: state.detailMovie.error,
        },
      };
    }
    case "GET_MOVIE_DETAIL_SUCCESS": {
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          isLoading: false,
          data: payload?.data,
        },
      };
    }
    case "GET_MOVIE_DETAIL_ERROR": {
      return {
        ...state,
        detailMovie: {
          ...state.detailMovie,
          isLoading: false,
          error: payload?.error,
        },
      };
    }
    case "SEARCH_MOVIE_PENDING": {
      return {
        ...state,
        searchMovie: {
          ...state.searchMovie,
          isLoading: true,
          error: initialState.searchMovie.error,
        },
      };
    }
    case "SEARCH_MOVIE_SUCCESS": {
      return {
        ...state,
        searchMovie: {
          ...state.searchMovie,
          isLoading: false,
          data: payload?.data,
        },
      };
    }
    case "SEARCH_MOVIE_ERROR": {
      return {
        ...state,
        searchMovie: {
          ...state.searchMovie,
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

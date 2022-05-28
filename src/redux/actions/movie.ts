/* eslint-disable camelcase */
import axios from "axios";

import { API } from "../../config";
import { Dispatch } from "../types";

interface Parameters {
  data?: any;
  callback?: any;
  id?: any;
  type?: string;
  page?: number;
  callbackError?: any;
  query?: string;
}

export const getListMovieHome = () => async (dispatch: Dispatch) => {
  const dataHome: any[] = [];
  try {
    dispatch({ type: "GET_MOVIE_HOME_PENDING" });

    let responseUpComming: any = await axios.get(
      `${API.BASE_URL}movie/upcoming`,
      {
        params: {
          api_key: API.KEY,
          page: 1,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    responseUpComming = {
      id: "upcoming",
      name: "Up Coming",
      results: responseUpComming.data.results,
    };

    let responseTopRated: any = await axios.get(
      `${API.BASE_URL}movie/top_rated`,
      {
        params: {
          api_key: API.KEY,
          page: 1,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    responseTopRated = {
      id: "top_rated",
      name: "Top Rated",
      results: responseTopRated.data.results,
    };

    let responsePopular: any = await axios.get(`${API.BASE_URL}movie/popular`, {
      params: {
        api_key: API.KEY,
        page: 1,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    responsePopular = {
      id: "popular",
      name: "Popular",
      results: responsePopular.data.results,
    };

    let responseNowPlaying: any = await axios.get(
      `${API.BASE_URL}movie/now_playing`,
      {
        params: {
          api_key: API.KEY,
          page: 1,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
    responseNowPlaying = {
      id: "now_playing",
      name: "Now Playing",
      results: responseNowPlaying.data.results,
    };

    dataHome.push(
      responseNowPlaying,
      responsePopular,
      responseTopRated,
      responseUpComming,
    );

    dispatch({
      type: "GET_MOVIE_HOME_SUCCESS",
      payload: {
        data: dataHome,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_MOVIE_HOME_ERROR",
      payload: { error: "Something with our server !" },
    });
  }
};

export const getMovieByType =
  ({ type, page = 1 }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_TYPE_PENDING", payload: { page } });

      const response: any = await axios.get(`${API.BASE_URL}movie/${type}`, {
        params: {
          api_key: API.KEY,
          page: page,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "GET_MOVIE_TYPE_SUCCESS",
        payload: {
          data: response.data.results,
          page,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIE_TYPE_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const getDetailMovie =
  ({ id }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_DETAIL_PENDING" });

      const response: any = await axios.get(`${API.BASE_URL}movie/${id}`, {
        params: {
          api_key: API.KEY,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIE_DETAIL_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

export const searchMovie =
  ({ query }: Parameters) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: "SEARCH_MOVIE_PENDING" });

      const response: any = await axios.get(`${API.BASE_URL}search/movie`, {
        params: {
          api_key: API.KEY,
          query,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "SEARCH_MOVIE_SUCCESS",
        payload: {
          data: response.data.results,
        },
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_MOVIE_ERROR",
        payload: { error: "Something with our server !" },
      });
    }
  };

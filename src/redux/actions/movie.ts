/* eslint-disable camelcase */
import axios from "axios";

import { API } from "../../config";
import { Dispatch } from "../types";

interface Parameters {
  data?: any;
  callback?: any;
  id?: string;
  callbackError?: any;
}

export const getListMovieHome = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "GET_MOVIE_HOME_PENDING" });

    const response: any = await axios.get(`${API.BASE_URL}movie/upcoming`, {
      params: {
        api_key: API.KEY,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "GET_MOVIE_HOME_SUCCESS",
      payload: {
        data: response.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "GET_MOVIE_HOME_ERROR",
      payload: { error: "Something with our server !" },
    });
  }
};

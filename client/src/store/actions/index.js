import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/auth/login");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

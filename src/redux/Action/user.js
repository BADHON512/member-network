import axios from "axios";
import { FURL } from "../Store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "UserRequest",
    });

    const { data } = await axios.get(`${FURL}/get-user`, {
      withCredentials: true,
    });

    dispatch({
      type: "UserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "UserFail",
      payload: error.response.data.message,
    });
  }
};

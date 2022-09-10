import {
  ARTICLES_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/action-type";

const initialState = {
  isAuthenticated: false,
  accessToken: "",
  loginStatus: "",
  loading: false,
  loginError: "",
  username: "",
  password: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
        loginError: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        isAuthenticated: true,
        loading: false,
        loginStatus: "success",
      };
    case ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        accessToken: "",
        loginStatus: "Failed",
        loginError: action.response,
      };
    case LOGOUT:
      return {
        ...state,
        accessToken: "",
        loginStatus: "1",
        loading: false,
      };

    default:
      return state;
  }
};
export default loginReducer;

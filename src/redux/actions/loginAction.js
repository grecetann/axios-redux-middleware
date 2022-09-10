import { LOGIN_API } from "../../middleware/url";

import { LOGIN, LOGOUT } from "../constants/action-type";

export const getLogin = (user) => ({
  type: LOGIN,
  payload: {
    request: {
      url: `${LOGIN_API}`,
      method: "POST",
      data: {
        username: user.username,
        password: user.password,
      },
    },
  },
});

export const logoutUser = () => ({
  type: LOGOUT,
});

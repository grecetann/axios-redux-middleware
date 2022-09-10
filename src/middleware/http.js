import axios from "axios";

import axiosMiddleware from "redux-axios-middleware";

import { BASE_URL, LOGIN_API } from "./url";

const server = axios.create({
  baseURL: BASE_URL,
});
const middlewareConfig = {
  interceptors: {
    request: [
      {
        success({ getState }, req) {
          const token = localStorage.getItem("token");
          if (req && req.url !== LOGIN_API && req.headers && token) {
            req.headers.Authorization = `Bearer ${token}`;
          }

          return req;
        },
      },
    ],
    response: [
      {
        success({ dispatch }, res) {
          return Promise.resolve(res);
        },
        error({ dispatch }, res) {
          return Promise.reject(res);
        },
      },
    ],
  },
};

export default axiosMiddleware(server, middlewareConfig);

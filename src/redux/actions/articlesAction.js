import { ARTICLES_API } from "../../middleware/url";
import { ARTICLES, SEARCH_ARTICLES } from "../constants/action-type";

export const getArticles = (page) => ({
  type: ARTICLES,
  payload: {
    request: {
      url: `${ARTICLES_API}`,
      method: "GET",
      authenticated: true,
      params: {
        page: page,
      },
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer $(token)`,
      // },
    },
  },
});

export const searchArticles = (searchInput) => ({
  type: SEARCH_ARTICLES,
  payload: {
    search: searchInput,
  },
});

import {
  ARTICLES_SUCCESS,
  ARTICLES,
  ARTICLES_FAIL,
  SEARCH_ARTICLES,
} from "../constants/action-type";

// searchQuery =>  state.filteredArticles = state.articles.filter(article => articles.abstract.contains(searchQuery))

const initialState = {
  articles: [],
  filteredArticles: [],
  searchInput: "",
  articleStatus: "",
  loading: false,
  articleError: "",
};
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES:
      console.log("helloo 1");
      return {
        ...state,
        loading: true,
        articleError: null,
      };

    case ARTICLES_SUCCESS:
      console.log("success");
      return {
        ...state,
        articles: [...state.articles, ...action.payload.data.response.docs],
        loading: false,
        articleStatus: "success",
      };
    case ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        articleStatus: "Failed",
      };
    case SEARCH_ARTICLES:
      return {
        ...state,
        searchInput: action.payload.search,
        filteredArticles: state.articles.filter((article) =>
          article.abstract
            .toString()
            .toLowerCase()
            .match(state.searchInput.toString().toLowerCase())
        ),
      };

    default:
      return state;
  }
};
export default articleReducer;

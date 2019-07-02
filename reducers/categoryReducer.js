import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  loading: true,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, loading: action.payload };
    case actionTypes.GET_CATEGORIES_COMPLETE:
      return { ...state, categories: action.payload, loading: action.loading };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    default:
      return state;
  }
};

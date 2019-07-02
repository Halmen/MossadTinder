import * as actionTypes from "../actions/actionTypes";

const initialState = {
  candidates: [],
  loading: true,
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CANDIDATES:
      return { ...state, loading: action.payload };
    case actionTypes.GET_CANDIDATES_COMPLETE:
      return { ...state, candidates: action.payload, loading: action.loading };
    case actionTypes.GET_CANDIDATES_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading
      };
    default:
      return state;
  }
};

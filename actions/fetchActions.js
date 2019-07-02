import * as actionTypes from "./actionTypes";

export const fetchCategories = bool => {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload: bool
  };
};

export const fetchCategoriesComp = data => {
  return {
    type: actionTypes.GET_CATEGORIES_COMPLETE,
    payload: data,
    loading: false
  };
};

export const fetchCategoriesFail = error => {
  return {
    type: actionTypes.GET_CATEGORIES_FAIL,
    payload: error,
    loading: false
  };
};

export const fetchCandidates = bool => {
  return {
    type: actionTypes.GET_CANDIDATES,
    payload: bool
  };
};

export const fetchCandidatesComp = data => {
  return {
    type: actionTypes.GET_CANDIDATES_COMPLETE,
    payload: data,
    loading: false
  };
};

export const fetchCandidatesFail = error => {
  return {
    type: actionTypes.GET_CANDIDATES_FAIL,
    payload: error,
    loading: false
  };
};

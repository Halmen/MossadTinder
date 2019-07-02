import * as actionTypes from "./actionTypes";

export const getFilter = filter => dispatch => {
  dispatch({
    type: actionTypes.GET_FILTER,
    payload: filter
  });
};

export const addFilter = filter => dispatch => {
  dispatch({
    type: actionTypes.ADD_FILTER,
    payload: filter
  });
};

export const updateFilter = filter => dispatch => {
  dispatch({
    type: actionTypes.UPDATE_FILTER,
    payload: filter
  });
};

export const removeFilter = filter => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_FILTER,
    payload: filter
  });
};

export const getBlackList = list => dispatch => {
  dispatch({
    type: actionTypes.GET_BLACK_LIST,
    payload: list
  });
};

export const addBlackList = list => dispatch => {
  dispatch({
    type: actionTypes.ADD_BLACK_LIST,
    payload: list
  });
};

export const getLastSession = unswiped => dispatch => {
  dispatch({
    type: actionTypes.GET_LAST_SESSION,
    payload: unswiped
  });
};

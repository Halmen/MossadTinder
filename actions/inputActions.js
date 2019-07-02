import * as actionTypes from "./actionTypes";

export const setYearInput = year_input => dispatch => {
  dispatch({
    type: actionTypes.SET_YEAR_INPUT,
    payload: year_input
  });
};

export const setActiveInput = active_input => dispatch => {
  dispatch({
    type: actionTypes.SET_ACTIVE_INPUT,
    payload: active_input
  });
};

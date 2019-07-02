import * as actionTypes from "../actions/actionTypes";

const initialState = {
  filters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILTER:
      return {
        filters: state.filters
      };
    case actionTypes.ADD_FILTER:
      const addfilters = state.filters.some(
        e => e.name === action.payload.filter.name
      )
        ? state.filters
        : [...state.filters, action.payload.filter];
      state.filters;

      return {
        filters: addfilters
      };
    case actionTypes.UPDATE_FILTER:
      const updatefilters = state.filters.map(x =>
        x.name === action.payload.filter.name ? action.payload.filter : x
      );

      return {
        filters: updatefilters
      };
    case actionTypes.REMOVE_FILTER:
      const removefilters = state.filters.filter(
        x => x.name !== action.payload.filter.name
      );

      return {
        filters: removefilters
      };
    default:
      return state;
  }
};

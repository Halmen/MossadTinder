import * as actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_YEAR_INPUT:
      const id1 = action.payload.id;
      const years = action.payload.years;
      return {
        [id1]: {
          years: years,
          active: state[id1] ? state[id1].active : null
        }
      };
    case actionTypes.SET_ACTIVE_INPUT:
      const id2 = action.payload.id;
      const active = action.payload.active;
      return {
        [id2]: {
          years: state[id2] ? state[id2].years : null,
          active: active
        }
      };
    default:
      return state;
  }
};

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLACK_LIST:
      return {
        list: state.list
      };
    case actionTypes.ADD_BLACK_LIST:
      const addlist = state.list.some(e => e.id === action.payload.id)
        ? state.list
        : [...state.list, action.payload];

      db.find({ name: "lastSessionRows" }, (err, lastSessionData) => {
        if (!err) {
          const unswiped = lastSessionData[0].unswiped.filter(
            x => x.id !== action.payload.id
          );
          db.update(
            { name: "lastSessionRows" },
            { name: "lastSessionRows", unswiped: unswiped }
          );
        }
      });
      return {
        list: addlist
      };

    default:
      return state;
  }
};

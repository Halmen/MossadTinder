import * as actionTypes from "../actions/actionTypes";
import Datastore from "react-native-local-mongodb";

db = new Datastore({ filename: "asyncStorageKey", autoload: true });

const initialState = {
  matching_cand: []
};

const FilteCandidates = (filters, candidates, blacklist) => {
  const whitelist = candidates.filter(c => !blacklist.includes(c.id));
  let fitlteredList = [];
  if (filters.length > 0) {
    for (let candidate of whitelist) {
      let result = 0;
      for (let tech of candidate.technologies) {
        result = filters.some(
          e =>
            e.name === tech.name &&
            (e.xp < tech.experianceYears || e.xp === tech.experianceYears)
        )
          ? result + 1
          : result + 0;
      }

      if (result == filters.length) {
        fitlteredList.push(candidate);
      }
    }
  }
  return fitlteredList;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LAST_SESSION:
      return {
        matching_cand: action.payload
      };
    case actionTypes.FILTER_CANDIDATES:
      const filteredList = FilteCandidates(
        action.filters,
        action.candidates,
        action.blacklist
      );
      db.update(
        { name: "lastSessionRows" },
        { name: "lastSessionRows", unswiped: filteredList }
      );

      return {
        matching_cand: filteredList
      };
    default:
      return state;
  }
};

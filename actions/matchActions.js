import * as actionTypes from "./actionTypes";

export const filterCandidates = () => (dispatch, getState) => {
  let filters = getState().filterReducer.filters.filter(x => x.active === true);
  filters = filters.map(x => ({
    name: x.name,
    xp: x.xp
  }));

  const candidates = getState().candidateReducer.candidates.map(x => ({
    id: x._id,
    name: x.name,
    age: x.age,
    technologies: x.technologies,
    img: x.picture
  }));
  const blacklist = getState().blackListReducer.list.map(x => x.id);

  dispatch({
    type: actionTypes.FILTER_CANDIDATES,
    filters: filters,
    candidates: candidates,
    blacklist: blacklist
  });
};

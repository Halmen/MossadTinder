import {
  fetchCandidates,
  fetchCandidatesComp,
  fetchCandidatesFail
} from "../actions/fetchActions";

const candidatesUrl = "https://welcome.dropboy.io/candidates";

export const getCandidates = () => {
  return async dispatch => {
    try {
      const candidatesPromise = await fetch(candidatesUrl);
      dispatch(fetchCandidates(true));
      const candidates = await candidatesPromise.json();
      dispatch(fetchCandidatesComp(candidates));
    } catch (error) {
      dispatch(fetchCandidatesFail(error));
    }
  };
};

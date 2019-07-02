import {
  fetchCategories,
  fetchCategoriesComp,
  fetchCategoriesFail
} from "../actions/fetchActions";

const categoriesUrl = "https://welcome.dropboy.io/technologies";

export const getCategories = () => {
  return async dispatch => {
    try {
      const categoriesPromise = await fetch(categoriesUrl);
      dispatch(fetchCategories(true));
      const categories = await categoriesPromise.json();
      dispatch(fetchCategoriesComp(categories));
    } catch (error) {
      dispatch(fetchCategoriesFail(error));
    }
  };
};

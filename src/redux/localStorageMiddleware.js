import { ADD_CATEGORY, ADD_SUBCATEGORY, ADD_EXPENSE } from './actionTypes';
import {
  updateCategories,
  updateSubCategories,
  updateExpenses,
} from './localStorageActions';

const actionHandler = {
  [ADD_CATEGORY]: updateCategories,
  [ADD_SUBCATEGORY]: updateSubCategories,
  [ADD_EXPENSE]: updateExpenses,
};

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // After the action is dispatched and the state is updated,
  // we save part of state to local storage against relevant actions.
  if (actionHandler[action.type] != null) {
    actionHandler[action.type](store.getState());
  }

  return result;
};

export default localStorageMiddleware;

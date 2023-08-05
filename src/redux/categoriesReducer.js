import { ADD_CATEGORY, GET_CATEGORIES } from './actionTypes';

const initialState = [];

const addCategory = (state, action) => [...state, action.payload.categoryName];

const getCategoryList = (state) => state;

const actionHandlers = {
  [ADD_CATEGORY]: addCategory,
  [GET_CATEGORIES]: getCategoryList,
};

const categoriesReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default categoriesReducer;

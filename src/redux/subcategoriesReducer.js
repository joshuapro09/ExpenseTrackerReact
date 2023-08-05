import { ADD_SUBCATEGORY, GET_SUBCATEGORIES } from './actionTypes';

const initialState = {};

const addSubcategory = (state, action) => {
  const { categoryName, subcategoryName } = action.payload;
  return {
    ...state,
    [categoryName]: [...(state[categoryName] || []), subcategoryName],
  };
};

const getSubcategoryList = (state, action) =>
  state[action.payload.categoryName] || [];

const actionHandlers = {
  [ADD_SUBCATEGORY]: addSubcategory,
  [GET_SUBCATEGORIES]: getSubcategoryList,
};

const subcategoriesReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default subcategoriesReducer;

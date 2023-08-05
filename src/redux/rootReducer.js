import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import subcategoriesReducer from './subcategoriesReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  subcategories: subcategoriesReducer,
  expenses: expensesReducer,
});

export default rootReducer;

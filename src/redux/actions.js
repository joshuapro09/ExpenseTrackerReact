import { ADD_CATEGORY, ADD_SUBCATEGORY, ADD_EXPENSE } from './actionTypes.js';

export const addCategory = (categoryName) => {
  return {
    type: ADD_CATEGORY,
    payload: { categoryName },
  };
};

export const addSubCategory = (categoryName, subcategoryName) => {
  return {
    type: ADD_SUBCATEGORY,
    payload: { categoryName, subcategoryName },
  };
};

export const addExpense = (
  categoryName,
  subcategoryName,
  itemName,
  date,
  amount
) => {
  return {
    type: ADD_EXPENSE,
    payload: { categoryName, subcategoryName, itemName, date, amount },
  };
};

export const updateCategories = (state) => {
  localStorage.setItem('categories', JSON.stringify(state.categories));
};

export const getCategories = () => {
  return JSON.parse(localStorage.getItem('categories')) || [];
};

export const updateSubCategories = (state) => {
  localStorage.setItem('subcategories', JSON.stringify(state.subcategories));
};

export const getSubCategories = () => {
  return JSON.parse(localStorage.getItem('subcategories')) || {};
};

export const updateExpenses = (state) => {
  localStorage.setItem('expenses', JSON.stringify(state.expenses));
};

export const getExpenses = () => {
  return JSON.parse(localStorage.getItem('expenses')) || {};
};

export const getInitialState = () => ({
  categories: getCategories(),
  subcategories: getSubCategories(),
  expenses: getExpenses(),
});

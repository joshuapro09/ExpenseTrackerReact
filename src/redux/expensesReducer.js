import { ADD_EXPENSE, GET_EXPENSES } from './actionTypes';

const initialState = [];

const addExpense = (state, action) => [
  ...state,
  {
    categoryName: action.payload.categoryName,
    subcategoryName: action.payload.subcategoryName,
    itemName: action.payload.itemName,
    date: action.payload.date,
    amount: action.payload.amount,
  },
];

const getExpenseList = (state, action) =>
  state.filter(
    (expense) =>
      expense.categoryName === action.payload.categoryName &&
      expense.subcategoryName === action.payload.subcategoryName
  );

const actionHandlers = {
  [ADD_EXPENSE]: addExpense,
  [GET_EXPENSES]: getExpenseList,
};

const expensesReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default expensesReducer;

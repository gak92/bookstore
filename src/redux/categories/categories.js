// ACTIONS
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// REDUCER
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;

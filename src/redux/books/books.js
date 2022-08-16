import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// REDUCER
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const addBook = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export default booksReducer;

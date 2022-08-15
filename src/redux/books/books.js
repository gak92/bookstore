// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];
let bookId = 0;

// REDUCER
const booksReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_BOOK:
      return [...state, action.paylod];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
}

// ACTIONS CREATOR
export const addBook = (title, author) => {
  return { 
    type: ADD_BOOK,
    paylod: {
      id: bookId + 1,
      title,
      author,
    },
  };
}

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  };
}

export default booksReducer;

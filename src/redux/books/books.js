import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'vEEu5G5Iqrs3wYfAbg4u';
const requestedURL = `${baseURL}/apps/${apiKey}/books`;

// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/books/DISPLAY_BOOKS';

const initialState = [
  // {
  //   id: '1',
  //   title: 'The hunger games',
  //   author: 'Suzanne Collins',
  //   category: 'Action',
  // },
  // {
  //   id: '2',
  //   title: 'Dune',
  //   author: 'Frank Herbert',
  //   category: 'Science Fiction',
  // },
  // {
  //   id: '3',
  //   title: 'Capital in the Twenty-First Century',
  //   author: 'Suzanne Collins',
  //   category: 'Economy',
  // },
];

// REDUCER
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

// ACTIONS CREATOR
export const displayBooks = () => async (dispatch) => {
  const response = await fetch(requestedURL);
  const res = await response.json();
  const books = Object.entries(res).map(([key, val]) => {
    const { title, author, category } = val[0];
    return {
      id: key,
      title,
      author,
      category,
    };
  });
  if (books) {
    dispatch({
      type: DISPLAY_BOOKS,
      payload: books,
    });
  }
};

export const addBook = (title, author) => async (dispatch) => {
  const book = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Action',
  };

  await fetch(requestedURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(() => dispatch({
      type: ADD_BOOK,
      payload: book,
    }));
};

export const removeBook = (id) => async (dispatch) => {
  const url = `${requestedURL}/${id}`;
  console.log('URL: ', url);
  console.log('ID: ', id);
  const response = await fetch(url, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log('Response: ', response);
  dispatch({
    type: REMOVE_BOOK,
    payload: {
      id,
    },
  });
};

export default booksReducer;

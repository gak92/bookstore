import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'vEEu5G5Iqrs3wYfAbg4u';
const requestedURL = `${baseURL}/apps/${apiKey}/books`;

// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/books/DISPLAY_BOOKS';

const initialState = [];

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

const toArray = (data) => {
  const bookArray = Object.entries(data).map(([key, val]) => {
    const { title, author, category } = val[0];
    return {
      id: key,
      title,
      author,
      category,
    };
  });

  return bookArray;
};

export const displayBooks = createAsyncThunk(
  DISPLAY_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(requestedURL);
    const data = await response.json();
    const books = toArray(data);
    if (books) {
      dispatch({
        type: DISPLAY_BOOKS,
        payload: books,
      });
    }
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    const response = await fetch(requestedURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    if (response.status === 201) {
      dispatch({
        type: ADD_BOOK,
        payload: book,
      });
    }
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    const url = `${requestedURL}/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.status === 201) {
      dispatch({
        type: REMOVE_BOOK,
        payload: {
          id,
        },
      });
    }
  },
);

export default booksReducer;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { displayBooks } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  const books = useSelector((state) => state.books);

  return (
    <section className="book-list">
      {
        books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }
    </section>
  );
};

export default BooksList;

import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <section className="book-list">
      <h2>List of Books</h2>
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

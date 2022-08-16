import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(e.target.title.value, e.target.author.value));
    e.target.reset();
  };

  return (
    <section className="book-form">
      <h2>Add a Book</h2>
      <form onSubmit={handleAddBook}>
        <input type="text" name="title" placeholder="Enter name of the book" />
        <input
          type="text"
          name="author"
          placeholder="Enter name of the author"
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default BookForm;

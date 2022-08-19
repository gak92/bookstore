import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
      category: 'Action',
    };

    if (book.title && book.author) {
      dispatch(addBook(book));
      e.target.reset();
    }
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
        <button type="submit" className="btn-add-book">Add Book</button>
      </form>
    </section>
  );
};

export default BookForm;

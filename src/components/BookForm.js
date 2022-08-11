import React from 'react';

const BookForm = () => (
  <section className="book-form">
    <h2>Add a Book</h2>
    <form>
      <input type="text" name="title" placeholder="Enter name of the book" />
      <input type="text" name="author" placeholder="Enter name of the author" />
      <button type="submit">Add Book</button>
    </form>
  </section>
);

export default BookForm;

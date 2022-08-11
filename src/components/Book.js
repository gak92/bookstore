import React from "react";

const Book = (props) => {
  const { id, title, author, category } = props;

  return (
    <div className="book-div">

      <div className="book-info">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="book-btns">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-status">
        <div className="status-circle"></div>
        <p>64%</p>
        <p>Completed</p>
      </div>

      <div className="book-chapter">
        <p>Current chapter</p>
        <p>chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

export default Book;

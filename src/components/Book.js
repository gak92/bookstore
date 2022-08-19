import React from 'react';
import { Progress } from 'antd';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-div" id={id}>

      <div className="book-info">
        <div>
          <p className="book-category">{category}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author">{author}</p>
        </div>
        <div className="book-btns">
          <button type="button">Comments</button>
          <div className="btn-divider" />
          <button type="button" onClick={() => handleRemoveBook(id)}>Remove</button>
          <div className="btn-divider" />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-status">
        <div className="status-circle">
          <Progress
            type="circle"
            width={85}
            format={() => ''}
            strokeColor={{
              '0%': '#307bbe',
              '100%': '#379cf6',
            }}
            trailColor="#e8e8e8"
            percent="64"
          />
        </div>
        <div className="status-info">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress-divider" />
      <div className="book-chapter">
        <p className="current-chapter">Current chapter</p>
        <p className="chapter-number">chapter 17</p>
        <button type="button" className="btn-update-progress">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

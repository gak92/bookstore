import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categoriesStatus = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories-main">
      <button type="button" onClick={handleStatus} className="btn-check-status">
        Check Status
      </button>
      <p>{categoriesStatus}</p>
    </div>
  );
};
export default Categories;

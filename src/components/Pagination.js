// Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setItemsPerPage } from '../redux/actions';
import { Button, Select, MenuItem } from '@mui/material';

const Pagination = ({ totalItems }) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(state => state.pagination);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (page) => {
    dispatch(setPage(page));
  };

  const handleChangeItemsPerPage = (event) => {
    dispatch(setItemsPerPage(event.target.value));
    dispatch(setPage(1));
  };

  return (
    <div>
      <div>
        <Button disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>Previous</Button>
        <Button disabled={currentPage === totalPages} onClick={() => handleChangePage(currentPage + 1)}>Next</Button>
      </div>
      <div>
        <Select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Pagination;

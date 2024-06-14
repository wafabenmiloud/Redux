import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Box } from '@mui/material';

const Filter = () => {
  const movies = useSelector(state => state.movies);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const categories = [...new Set(movies.map(movie => movie.category))];

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    
    <Box sx={{ my: 2 }}>
      <FormControl sx={{ minWidth: 240 }}>
        <InputLabel>Categories</InputLabel>
        <Select
          multiple
          value={filters}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox checked={filters.indexOf(category) > -1} />
              <ListItemText primary={category} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;

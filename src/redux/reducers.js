import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchMovies,
  deleteMovie,
  toggleLike,
  setFilter,
  setPage,
  setItemsPerPage,
} from './actions';

const initialState = {
  movies: [],
  filters: [],
  currentPage: 1,
  itemsPerPage: 4,
};

const moviesReducer = createReducer(initialState.movies, (builder) => {
  builder
    .addCase(fetchMovies, (state, action) => action.payload)
    .addCase(deleteMovie, (state, action) => state.filter(movie => movie.id !== action.payload))
    .addCase(toggleLike, (state, action) => state.map(movie =>
      movie.id === action.payload
        ? { ...movie, likes: movie.likes + (movie.liked ? -1 : 1), liked: !movie.liked }
        : movie
    ));
});

const filtersReducer = createReducer(initialState.filters, (builder) => {
  builder.addCase(setFilter, (state, action) => action.payload);
});

const paginationReducer = createReducer({ currentPage: initialState.currentPage, itemsPerPage: initialState.itemsPerPage }, (builder) => {
  builder
    .addCase(setPage, (state, action) => ({ ...state, currentPage: action.payload }))
    .addCase(setItemsPerPage, (state, action) => ({ ...state, itemsPerPage: action.payload }));
});

export default combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
});

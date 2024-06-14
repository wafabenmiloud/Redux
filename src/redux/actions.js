import { createAction } from '@reduxjs/toolkit';

export const fetchMovies = createAction('FETCH_MOVIES');
export const deleteMovie = createAction('DELETE_MOVIE');
export const toggleLike = createAction('TOGGLE_LIKE');
export const setFilter = createAction('SET_FILTER');
export const setPage = createAction('SET_PAGE');
export const setItemsPerPage = createAction('SET_ITEMS_PER_PAGE');

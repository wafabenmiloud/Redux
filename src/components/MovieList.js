// MovieList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, setPage, setItemsPerPage } from '../redux/actions';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { movies$ } from '../movies';
import Filter from './Filter';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, filters, pagination } = useSelector(state => state);

  useEffect(() => {
    movies$.then(movies => dispatch(fetchMovies(movies)));
  }, [dispatch]);

  const filteredMovies = movies.filter(movie => 
    filters.length === 0 || filters.includes(movie.category)
  );

  const indexOfLastMovie = pagination.currentPage * pagination.itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - pagination.itemsPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div style={{width:"80%", margin:"auto"}}>
      <Filter />
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        {currentMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination totalItems={filteredMovies.length} />
    </div>
  );
};

export default MovieList;

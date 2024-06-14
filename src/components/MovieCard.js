import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike } from '../redux/actions';
import { Card, CardContent, Typography, IconButton, LinearProgress, CardActions, Box } from '@mui/material';
import { ThumbUp, ThumbDown, Delete } from '@mui/icons-material';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
  };

  const handleToggleLike = () => {
    dispatch(toggleLike(movie.id));
  };

  const likeRatio = (movie.likes / (movie.likes + movie.dislikes)) * 100;

  return (
    <Card style={{ margin: '10px', flexBasis: '30%', backgroundColor: "#ECF0F1" }}>
     <CardContent>
        <Typography variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.category}
        </Typography>
        <div style={{ marginTop: '10px' }}>
          <Typography variant="body2" color="textSecondary">
            Like Ratio
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', marginRight: '10px' }}>
              <div style={{ width: `${likeRatio}%`, backgroundColor: likeRatio > 50 ? '#4CAF50' : '#F44336', height: '8px', borderRadius: '4px' }} />
            </div>
            <Typography variant="body2" color="textSecondary">
              {`${likeRatio.toFixed(1)}%`}
            </Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="like" onClick={handleToggleLike}>
          {movie.liked ? <ThumbDown color="error" /> : <ThumbUp color="success" />}
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <Delete color="" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MovieCard;

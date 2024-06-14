// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';
import './App.css';
const App = () => (
  <Provider store={store}>
    <div className='app'>
      <h1 className='titre'>Movies</h1>
      <MovieList />
    </div>
  </Provider>
);

export default App;

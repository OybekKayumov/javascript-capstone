import './style.css';
import getMovies from '../modules/movies.fetch.js';
import moviesDisplay from '../modules/moviesDisplay.js';
import modalHandle from '../modules/modalMovieDetails.js';

getMovies().then((movieList) => {
  moviesDisplay(movieList);
  modalHandle(movieList);
});

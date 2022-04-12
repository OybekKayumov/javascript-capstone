import './style.css';
import getMovies from '../modules/movies.fetch';
import moviesDisplay from '../modules/moviesDisplay';

getMovies().then((movieList) => {
  moviesDisplay(movieList);
});

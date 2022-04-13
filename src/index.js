import './style.css';
import getMovies from '../modules/movies.fetch';
import moviesDisplay from '../modules/moviesDisplay';
import reserveHandle from '../modules/reserveModal';

getMovies().then((movieList) => {
  moviesDisplay(movieList);
  reserveHandle(movieList);
});

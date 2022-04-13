import './style.css';

import getMovies from '../modules/movies.fetch';
import moviesDisplay from '../modules/moviesDisplay';
import handleModal from '../modules/modalMovieDetails.js';
import reserveHandle from '../modules/reserveModal';

getMovies().then((movieList) => {
  moviesDisplay(movieList);
  handleModal(movieList);
  reserveHandle(movieList);
});

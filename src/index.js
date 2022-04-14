import './style.css';

import getMovies from '../modules/movies.fetch.js';
import moviesDisplay from '../modules/moviesDisplay.js';
import handleReservationModal from '../modules/modalReservationDetails.js';
import handleMovieModal from '../modules/modalMovieDetails.js';

getMovies().then((movieList) => {
  moviesDisplay(movieList);
  handleMovieModal(movieList);
  handleReservationModal(movieList);
});

import {
  addComment,
  countComment,
  displayComments,
} from './moviesComment.js';

let commentsLength = 0;

const modalMovie = (movie, commentsLength) => `
    <button class="btn-close-modal">x</button>
    <div class="modal-header">
      
        <img src="${movie.image.medium}" alt="image title"/>
      
      <h2 class="movie-title">${movie.name}</h2>
    </div>
    <div class="info-container">
      <h3>Genres</h3>
      <p class="genres">${movie.genres}</p>
      <p class="rating">Rating: ${movie.rating.average}</p>
      <p class="description">${movie.summary}</p> 
    </div>
    <div class="info-container comments">
      <h3>Comments (<span class="counter">${commentsLength}</span>)</h2>
      <ul class="comment-container list"></ul>
      <h3>Add a comment</h3>
      <div class="msgErrorContainer"></div>
      <form class='form' action="index_submit" method="POST" accept-charset="utf-8">
        <input type="text" placeholder="Name" name="name" maxlength="20" required/>
        <textarea
          name="comment"
          maxlength="220"
          placeholder="Your Comments" cols="50" rows="10" required></textarea>
        <button type="submit" class="btn btn-add-comment">Comment</button>
      </form>
    </div>
  `;

const modalSection = document.querySelector('.modal-container');
const container = document.querySelector('.container');

const openModal = () => {
  modalSection.classList.add('show-modal');
  container.classList.add('bg-body-modal');
};

const closeModal = () => {
  modalSection.classList.remove('show-modal');
  container.classList.remove('bg-body-modal');
  modalSection.innerHTML = '';
};

const createModal = (movieData, commentsLength) => {
  const modalArticle = document.createElement('div');
  modalArticle.className = 'modal-card';
  modalArticle.innerHTML = modalMovie(movieData, commentsLength);
  modalSection.appendChild(modalArticle);
  const closeModalBtn = document.querySelector('.btn-close-modal');
  closeModalBtn.addEventListener('click', closeModal);
};

const handleMovieModal = (movies) => {
  const openModalBtn = document.querySelectorAll('.card-comments');
  // const openModalBtn = document.querySelectorAll('.card__comments');

  openModalBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      openModal();
      commentsLength = await countComment(movies[index].id);
      const urlBase = 'https://api.tvmaze.com/shows/';
      const url = `${urlBase}${movies[index].id}`;
      const movieData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);

      createModal(movieData, commentsLength);
      const form = document.querySelector('.form');
      form.addEventListener('submit', (event) => {
        addComment(event, form, movies[index].id);
      });
      displayComments(movies[index].id);
    });
  });
};

export default handleMovieModal;
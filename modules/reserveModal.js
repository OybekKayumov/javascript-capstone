import {
  displayReserve,
  addReserve,
} from './reserve.js';

// eslint-disable-next-line prefer-const
let reserveLength = 0;

const reserveModal = (movie, reserveLength) => `
  <button class="btn-close-modal">x</button>
  <div class="modal-header">
    <figure>
      <img src="${movie.image.medium}" alt="image title"/>
    </figure>
    <h2 class="movie-title">${movie.name}</h2>
  </div>
  <div class="info-container">
    <h3>Description</h3>
    <p class="description">${movie.summary}</p>         
  </div>
  <div class="info-container reserve">
    <h3>Reservation (<span class="counter">${reserveLength}</span>)</h3>
    <ul class="reserve-container"></ul>
    <h3>Reserve</h3>
    <div class="msgErrorContainer"></div>
    <form action="index_submit" method="POST" accept-charset="utf-8">
      <input type="text" placeholder="Name" name="Your name" maxlength="20" required/>
      <p>Start Date</p>
      <input id="start-date" type="date" placeholder="Start date" name="Start date" maxlength="20" required/>
      <p>Return Date</p>
      <input id="end-date" type="date" placeholder="Return date" name="Return date" maxlength="20" required/>      
      <button type="submit" class="btn btn-add-reserve">Submit</button>
    </form>
  </div>
`;

const modalSection = document.querySelector('.modal-container');
const $body = document.querySelector('body');

const openModal = () => {
  modalSection.classList.add('show-modal');
  $body.classList.add('overflow-hidden');
};

const closeModal = () => {
  modalSection.classList.remove('show-modal');
  $body.classList.remove('overflow-hidden');
  modalSection.innerHTML = '';
};

const createModal = (movieData, reserveLength) => {
  const modalArticle = document.createElement('div');
  modalArticle.className = 'modal-card';
  modalArticle.innerHTML = reserveModal(movieData, reserveLength);
  modalSection.appendChild(modalArticle);
  const closeModalBtn = document.querySelector('.btn-close-modal');
  closeModalBtn.addEventListener('click', closeModal);
};

const reserveHandle = (movies) => {
  const reserveBtn = document.querySelectorAll('.card-reserve');
  // const reserveBtn = document.querySelectorAll('.card__reservations');

  reserveBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      openModal();

      const urlBase = 'https://api.tvmaze.com/shows/';
      const url = `${urlBase}${movies[index].id}`;
      const movieData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);

      createModal(movieData, reserveLength);
      const form = document.querySelector('form');
      form.addEventListener('submit', (event) => {
        addReserve(event, form, movies[index].id);
      });

      displayReserve(movies[index].id);
    });
  });
};

export default reserveHandle;
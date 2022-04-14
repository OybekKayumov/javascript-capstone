import {
  displayReservation,
  addReservation,
  countReservation,
} from './reservationHandler.js';

let reservationLength = 0;

const modalReservation = (movie, reservationLength) => `
  <button class="btn-close-modal">x</button>
  <div class="modal-header">
    <img src="${movie.image.medium}" alt="image title"/>
    <h2 class="movie-title">${movie.name}</h2>
  </div>
  <div class="info-container">
    <h3>Description</h3>
    <p class="description">${movie.summary}</p>         
  </div>
  <div class="info-container reserve">
    <h3>Reservations (<span class="counter">${reservationLength}</span>)</h3>
    <ul class="reservation-container list"></ul>
    <h3>Add a reservation</h3>
    <div class="msgErrorContainer"></div>
    <form class='form' action="index_submit" method="POST" accept-charset="utf-8">
      <input type="text" placeholder="Name" name="name" maxlength="20" required/>
      <input class="input-date" type="text" placeholder="Start date" name="startDate" onfocus="(this.type='date')" onblur="(this.type='text')" required/>
      <input class="input-date" placeholder="End date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')"  name="endDate"  required/>      
      <button type="submit" class="btn btn-add-reserve">Reserve</button>
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

const createModal = (movieData, reservationLength) => {
  const modalArticle = document.createElement('div');
  modalArticle.className = 'modal-card';
  modalArticle.innerHTML = modalReservation(movieData, reservationLength);
  modalSection.appendChild(modalArticle);
  const closeModalBtn = document.querySelector('.btn-close-modal');
  closeModalBtn.addEventListener('click', closeModal);
};

const handleReservationModal = (movies) => {
  const reservationBtn = document.querySelectorAll('.card-reserve');

  reservationBtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      openModal();
      reservationLength = await countReservation(movies[index].id);
      const urlBase = 'https://api.tvmaze.com/shows/';
      const url = `${urlBase}${movies[index].id}`;
      const movieData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);

      createModal(movieData, reservationLength);
      const form = document.querySelector('.form');
      form.addEventListener('submit', (event) => {
        addReservation(event, form, movies[index].id);
      });

      displayReservation(movies[index].id);
    });
  });
};

export default handleReservationModal;
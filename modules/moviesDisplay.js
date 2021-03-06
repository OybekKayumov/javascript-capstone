import { updateLikes, addLike } from './movieslikes.js';
import { countItems } from './moviesCounter.js';

const moviesDisplay = (data) => {
  const moviesSection = document.querySelector('.cards');
  data.forEach((movie) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-image-container">
           <img src=${movie.image.medium}
             alt="ant-man">
        </div>
        <div class="card-content">
          <p class="card-title">
            ${movie.name}
          </p>
          <div class="card-info">
            <button class="card-comments">Comments</button>
            <button class="card-reserve">Reservations</button>
            <button id=${movie.id} class=" card-likes">Likes</button>
          </div>
        </div>    
    `;

    moviesSection.appendChild(card);
    const likesBtn = document.getElementById(`${movie.id}`);
    likesBtn.addEventListener('click', () => {
      addLike(movie.id);
      const num = likesBtn.textContent.split(' ');
      likesBtn.innerHTML = `${Number(num[0]) + 1} likes`;
    });
  });

  countItems(data);
  updateLikes();
};

export default moviesDisplay;
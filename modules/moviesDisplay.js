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
            <button class="card-reservations">Reservations</button>
            <button class=" card-likes">Likes</button>
          </div>
        </div>    
    `;

    moviesSection.appendChild(card);
  });
};

export default moviesDisplay;
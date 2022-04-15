const counter = (items) => {
  let itemCount = 0;

  items.forEach(() => {
    itemCount += 1;
  });
  return itemCount;
};

const countDisplay = (count) => {
  const navList1 = document.querySelector('#count-movies');
  navList1.innerHTML = `<li class="nav-item">(${count}) MOVIES</li>`;
};

const countItems = (movies) => {
  const number = counter(movies);
  countDisplay(number);
};

export { countDisplay, countItems, counter };

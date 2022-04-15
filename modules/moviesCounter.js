const counter = (items) => {
  let itemCount = 0;

  items.forEach(() => {
    itemCount += 1;
  });
  return itemCount;
};

const countDisplay = (count) => {
  // const navList = document.querySelector('.nav-list');
  // const li = document.createElement('li');
  // console.log(li);

  // li.innerHTML = `<li class="nav-item">(${count}) MOVIES</li>`;
  // navList.appendChild('li');

  const navList1 = document.querySelector('#count-movies');
  navList1.innerHTML = `<li class="nav-item">(${count}) MOVIES</li>`;
};

const countItems = (movies) => {
  const number = counter(movies);
  countDisplay(number);
};

export { countDisplay, countItems, counter };

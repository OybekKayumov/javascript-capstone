const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const appID = 'Ngyhlqhta3I7behhBDEq';

const postReservation = async (username, dateStart, dateEnd, id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      date_start: dateStart,
      date_end: dateEnd,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await resolve.text();
  return result;
};

const getReservation = async (id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const countReservation = async (id) => {
  const reserveNum = await getReservation(id);
  if (!reserveNum.length) {
    return 0;
  }
  return reserveNum.length;
};

const displayReservation = async (id) => {
  const ul = document.querySelector('.reservation-container');
  const reserveArr = await getReservation(id);
  ul.innerHTML = '';

  reserveArr.forEach((elem) => {
    const dateStart = new Date(elem.date_start);
    const dateEnd = new Date(elem.date_end);

    ul.innerHTML += `
    <li>
      <span>${dateStart.toLocaleDateString('en-US')} -</span>
      <span>${dateEnd.toLocaleDateString('en-US')} </span>
      <span>by ${elem.username}</span>
    </li>`;
  });

  const num = document.querySelector('.counter');
  num.textContent = await countReservation(id);
};

const addReservation = async (e, form, id) => {
  e.preventDefault();
  const num = document.querySelector('.counter');
  const { name, startDate, endDate } = form.elements;

  await postReservation(name.value, startDate.value, endDate.value, id);
  const ul = document.querySelector('.reservation-container');
  const dateStart = new Date(startDate.value);
  const dateEnd = new Date(endDate.value);

  ul.innerHTML += `
  <li>
    <span>${dateStart.toLocaleDateString('en-US')} -</span>
    <span>${dateEnd.toLocaleDateString('en-US')} </span>
    <span>by ${name.value}</span>
  </li>`;
  num.textContent = parseInt(num.textContent, 10) + 1;
  form.reset();
};

export {
  displayReservation, addReservation, countReservation, getReservation,
};

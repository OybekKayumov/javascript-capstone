const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const appID = 'Ngyhlqhta3I7behhBDEq';

const postReserve = async (username, dateStart, dateEnd, id) => {
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

const getReserve = async (id) => {
  const resolve = await fetch(`${baseURL}/${appID}/reservations?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const reserveCounter = async (id) => {
  const reserveNum = await getReserve(id);
  if (!reserveNum.length) {
    return 0;
  }
  return reserveNum.length;
};

const reserveTemplate = (date, name, reserve) => `
    <li>
      <span>${date}</span>
      <span>${name}: </span>
      <span>${reserve}</span>
    </li>
`;

const displayReserve = async (id) => {
  const ul = document.querySelector('ul');
  const reserveArr = await getReserve(id);
  ul.innerHTML = '';
  let html = '';

  reserveArr.forEach((elem) => {
    const reserveItem = reserveTemplate(
      elem.username,
      elem.date_start,
      elem.date_end,
    );
    html += reserveItem;
  });
  ul.insertAdjacentHTML('beforeend', html);

  const num = document.querySelector('.counter');
  num.textContent = await reserveCounter(id);
};

const addReserve = async (e, form, id) => {
  e.preventDefault();
  const num = document.querySelector('.counter');
  const name = form.querySelector('input');
  const startDate = document.getElementById('start-date');
  const endDate = document.getElementById('end-date');

  await postReserve(name.value, startDate.value, endDate.value, id);
  await displayReserve(id);
  num.textContent = await reserveCounter(id);
  form.reset();
};

export {
  displayReserve, addReserve, reserveCounter, getReserve,
};

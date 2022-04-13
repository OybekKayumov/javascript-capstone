const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

const appID = 'Ngyhlqhta3I7behhBDEq';

const getComment = async (id) => {
  const resolve = await fetch(`${baseURL}/${appID}/comments?item_id=${id}`);
  const result = await resolve.json();

  if (!result.length) {
    return [];
  }

  return result;
};

const commentTemplate = (date, name, comment) => `
    <li>
      <span>${date}</span>
      <span>${name}: </span>
      <span>${comment}</span>
    </li>
`;

const displayComments = async (id) => {
  const ul = document.querySelector('ul');
  const commentArr = await getComment(id);
  ul.innerHTML = '';
  let html = '';

  commentArr.forEach((elem) => {
    const commentItem = commentTemplate(
      elem.creation_date,
      elem.username,
      elem.comment,
    );
    html += commentItem;
  });
  ul.insertAdjacentHTML('beforeend', html);
};

export {
  displayComments, getComment,
};

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

const commentsCounter = async (id) => {
  const commentsNum = await getComment(id);
  if (!commentsNum.length) {
    return 0;
  }
  return commentsNum.length;
};

const displayComments = async (id) => {
  const ul = document.querySelector('.comment-container');
  const commentArr = await getComment(id);
  ul.innerHTML = '';

  commentArr.forEach((elem) => {
    const commentItem = `
    <li>
      <span>${elem.creation_date}</span>
      <span>${elem.username}: </span>
      <span>${elem.comment}</span>
    </li>`;
    ul.innerHTML += commentItem;
  });
};

export {
  displayComments, getComment, commentsCounter,
};

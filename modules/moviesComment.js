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

const postComment = async (username, comment, id) => {
  const resolve = await fetch(`${baseURL}/${appID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  const result = await resolve.text();
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

const addComment = async (e, form, id) => {
  e.preventDefault();
  const { name, comment } = form.elements;
  const num = document.querySelector('.counter');

  await postComment(name.value, comment.value, id);
  await displayComments(id);
  num.textContent = await commentsCounter(id);
  form.reset();
};

export {
  displayComments, getComment, addComment,
};

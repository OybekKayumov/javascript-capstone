/* ../__tests__/comment.test.js */
import { countComment, getComments } from '../modules/moviesComment.js';

describe('movie list counter', () => {
  test('it should return the count of the comment list', async () => {
    const movieId = 10;
    const arr = await getComments(movieId);
    const ul = document.querySelector('.comment-container');

    arr.forEach((elem) => {
      const date = new Date(elem.creation_date);
      ul.innerHTML += `
      <li>
        <span>${date.toLocaleDateString('en-US')}</span>
        <span>${elem.username}: </span>
        <span>${elem.comment}</span>
      </li>`;
    });
    const commentList = document.querySelectorAll('.comment-container li');
    const commentsCounter = countComment(arr);
    expect(commentList).toHaveLength(commentsCounter);
  });
});

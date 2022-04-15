/**
 * @jest-environment jsdom
 */

import { commentsCounter } from '../../modules/moviesComment.js';

const array = [
  { username: 'ok', comment: 'comment new', creation_date: '2022-04-11' },
  { username: 'tom', creation_date: '2022-05-10', comment: 'Hello' },
  { comment: 'comment 1', username: 'solomon', creation_date: '2022-04-17' },
  { comment: 'comment 2', username: 'fahd', creation_date: '2022-04-14' },
  { comment: 'comment 3', username: 'didier', creation_date: '2022-05-23' },
];

describe('movies counter', () => {
  test('it should display the number of comments', async () => {
    const countComment = commentsCounter(array);
    expect(countComment).toBe(5);
  });

  test('Adding new comment and testing the function', async () => {
    array.push({ username: 'Anna', comment: 'Best movie', creation_date: '2022-03-15' });
    const countComment = commentsCounter(array);
    expect(countComment).toBe(6);
  });

  test('it should display the number of comment item list', async () => {
    array.push({ username: 'Anna', comment: 'Best movie', creation_date: '2022-03-15' });
    document.body.innerHTML = '<ul class="comment-container list"></ul>';
    const ul = document.querySelector('.comment-container');
    array.forEach((elem) => {
      const date = new Date(elem.creation_date);
      ul.innerHTML += `
      <li>
        <span>${date.toLocaleDateString('en-US')}</span>
        <span>${elem.username}: </span>
        <span>${elem.comment}</span>
      </li>`;
    });
    const commentList = document.querySelectorAll('.comment-container li');
    const comments = commentsCounter(array);
    expect(commentList).toHaveLength(comments);
  });
});
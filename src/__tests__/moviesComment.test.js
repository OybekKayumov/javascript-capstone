import { commentsCounter } from '../../modules/moviesComment';

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
});

/* ../__tests__/comment.test.js */
import { counter } from '../../modules/moviesCounter.js';

const arr = [
  {
    id: 1, name: 'Homeland', genres: 'Drama,Thriller,Espionage', image: 'image', end: '2015-07-23',
  },
  {
    id: 2, name: 'Continuum', genres: 'Drama', image: 'image', end: '2021-09-01',
  },
  {
    id: 3, name: 'Bitten', genres: 'Thriller', image: 'image', end: '2020-02-07',
  },
  {
    id: 4, name: 'The 100', genres: 'Espionage', image: 'image', end: '2019-03-08',
  },
  {
    id: 5, name: 'Arrow', genres: 'Drama', image: 'image', end: '2016-06-21',
  },
  {
    id: 6, name: 'Revenge', genres: 'Espionage', image: 'image', end: '2018-04-09',
  },
  {
    id: 7, name: 'True Detective', genres: 'Thriller', image: 'image', end: '2017-05-10',
  },
];

describe('movie list counter', () => {
  test('it should display the count of list items', async () => {
    const countItems = counter(arr);
    expect(countItems).toBe(7);
  });
});

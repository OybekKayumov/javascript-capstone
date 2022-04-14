/** * @jest-environment jsdom */

// import { reserveCounter } from "../modules/reserve.js";
import { reservationCounter } from '../../modules/reservationHandler.js';

test('the reservation counter test', () => {
  const reservationTest = [
    {
      username: 'tom',
      date_start: '2022-05-07',
      date_end: '2022-05-10',
    },
    {
      username: 'didier',
      date_start: '2022-05-07',
      date_end: '2022-05-10',
    },
    {
      username: 'jos',
      date_start: '2022-05-07',
      date_end: '2022-05-10',
    },
    {
      username: 'jack',
      date_start: '2022-05-07',
      date_end: '2022-05-10',
    },
    {
      username: 'bob',
      date_start: '2022-05-07',
      date_end: '2022-05-10',
    },
  ];

  const count = reservationCounter(reservationTest);
  expect(count).toBe(5);
});
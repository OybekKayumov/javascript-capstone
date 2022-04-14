import sum from './sum.js';

describe('sum.js', () => {
  test('add two numbers', () => {
    expect(1).toBe(1);
  });
});

describe('sum.js', () => {
  test('add two numbers', () => {
    expect(sum(2, 8)).toBe(10);
  });

  test('add two numbers', () => {
    expect(sum(1, -2)).toBe(-1);
  });
});

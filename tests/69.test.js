import { mySqrt } from '../src/69.js';

describe('69. Sqrt', () => {
  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
    [9, 3],
    [10, 3],
    [20, 4],
    [40, 6],
    [80, 8],
    [107, 10],
    [666, 25],
    [4294967295, 65535],
    [9007199254740991, 94906265],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = mySqrt(input);
      expect(result).toBe(expected);
    });
  });
});

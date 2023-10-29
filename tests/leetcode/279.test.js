import { numSquares } from '../../src/leetcode/279.js';

describe('279. Perfect Squares', () => {
  [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 1],
    [12, 3],
    [13, 2],
    [56, 3],
    [8, 2],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numSquares(input);
      expect(result).toBe(expected);
    });
  });
});

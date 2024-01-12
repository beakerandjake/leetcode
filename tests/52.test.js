import { totalNQueens } from '../src/52.js';

describe('52. N-Queens II', () => {
  [
    [4, 2],
    [1, 1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = totalNQueens(input);
      expect(result).toBe(expected);
    });
  });
});

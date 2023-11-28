import { numTilings } from '../../src/leetcode/790.js';

describe('790. Domino and Tromino Tiling', () => {
  [
    [1, 1],
    [2, 2],
    [3, 5],
    [4, 11]
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = numTilings(input);
      expect(result).toBe(expected);
    });
  });
});

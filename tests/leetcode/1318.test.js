import { minFlips } from '../../src/leetcode/1318.js';

describe('1318. Minimum Flips to Make a OR b Equal to c', () => {
  [
    [2, 6, 5, 3],
    [4, 2, 7, 1],
    [1, 2, 3, 0],
  ].forEach(([a, b, c, expected]) => {
    test(`${a},${b},${c} -> ${expected}`, () => {
      const result = minFlips(a, b, c);
      expect(result).toBe(expected);
    });
  });
});

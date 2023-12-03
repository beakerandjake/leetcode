import { successfulPairs } from '../../src/leetcode/2300.js';
import { arrToStr } from '../util.js';

describe('2300. Successful Pairs of Spells and Potions', () => {
  [
    [[5, 1, 3], [1, 2, 3, 4, 5], 7, [4, 0, 3]],
    [[3, 1, 2], [8, 5, 8], 16, [2, 0, 2]],
    [
      [39, 34, 6, 35, 18, 24, 40],
      [27, 37, 33, 34, 14, 7, 23, 12, 22, 37],
      43,
      [10, 10, 9, 10, 10, 10, 10],
    ],
  ].forEach(([s, p, t, expected]) => {
    test(`${arrToStr(s)},${arrToStr(p)},${t} -> ${arrToStr(expected)}`, () => {
      const result = successfulPairs(s, p, t);
      expect(result).toEqual(expected);
    });
  });
});

import { candy } from '../src/leetcode/135.js';
import { arrToStr } from './util.js';

describe('135. Candy', () => {
  [
    [[1, 0, 2], 5],
    [[1, 2, 2], 4],
    [[6, 3, 2], 6],
    [[10], 1],
    [[1, 6, 10, 8, 7, 3, 2], 18],
  ].forEach(([ratings, expected]) => {
    test(`${arrToStr(ratings)} -> ${expected}`, () => {
      const result = candy(ratings);
      expect(result).toBe(expected);
    });
  });
});

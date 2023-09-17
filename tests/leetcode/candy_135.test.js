import { candy } from '../../src/leetcode/candy_135.js';
import { arrToStr } from '../util.js';

describe('135. Candy', () => {
  [
    [[1,0,2], 5],
    [[1,2,2], 4],
  ].forEach(([ratings, expected]) => {
    test(`${arrToStr(ratings)} -> ${expected}`, () => {
      const result = candy(ratings);
      expect(result).toBe(expected);
    });
  });
});

import { kidsWithCandies } from '../src/leetcode/1431.js';
import { arrToStr } from './util.js';

describe('1431. Kids With the Greatest Number of Candies', () => {
  [
    [[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
    [[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
    [[12, 1, 12], 10, [true, false, true]],
  ].forEach(([candies, extraCandies, expected]) => {
    test(`${arrToStr(candies)},${extraCandies}->${arrToStr(expected)}`, () => {
      const result = kidsWithCandies(candies, extraCandies);
      expect(result).toEqual(expected);
    });
  });
});

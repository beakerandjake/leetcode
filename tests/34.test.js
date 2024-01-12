import { searchRange } from '../src/leetcode/34.js';
import { arrToStr } from './util.js';

describe('34. Find First and Last Position of Element in Sorted Array', () => {
  [
    [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
    [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
    [[], 0, [-1, -1]],
    [[1, 2, 3, 4, 7, 7, 7, 9, 9, 9, 10], 7, [4, 6]],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)},${target} -> ${arrToStr(expected)}`, () => {
      const result = searchRange(input, target);
      expect(result).toEqual(expected);
    });
  });
});

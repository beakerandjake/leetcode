import { findMissingRanges } from '../src/163.js';
import { arrToStr } from './util.js';

describe('163. Missing Ranges', () => {
  [
    [
      [0, 1, 3, 50, 75],
      0,
      99,
      [
        [2, 2],
        [4, 49],
        [51, 74],
        [76, 99],
      ],
    ],
    [[-1], -1, -1, []],
    [[1000000000], 0, 1000000000, [[0, 999999999]]],
  ].forEach(([nums, lower, upper, expected]) => {
    test(`${arrToStr(nums)},${lower},${upper} -> ${arrToStr(expected)}`, () => {
      const result = findMissingRanges(nums, lower, upper);
      expect(result).toEqual(expected);
    });
  });
});

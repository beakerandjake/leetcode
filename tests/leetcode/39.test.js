import { combinationSum } from '../../src/leetcode/39.js';
import { arrToStr } from '../util.js';

describe('39. Combination Sum', () => {
  [
    [[2, 3, 6, 7], 7, [[2, 2, 3], [7]]],
    [
      [2, 3, 5],
      8,
      [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    ],
  ].forEach(([nums, target, expected]) => {
    test(`${arrToStr(nums)},${target} -> ${arrToStr(expected)}`, () => {
      const result = combinationSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});

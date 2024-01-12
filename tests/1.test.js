import { twoSum } from '../src/1.js';
import { arrToStr } from './util.js';

describe('1. Two Sum', () => {
  [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ].forEach(([nums, target, expected]) => {
    test(`${arrToStr(nums)},${target} -> ${arrToStr(expected)}`, () => {
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});

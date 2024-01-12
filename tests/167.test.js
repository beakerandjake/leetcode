import { twoSum } from '../src/leetcode/167.js';
import { arrToStr } from './util.js';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  [
    // replace with real test data
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)},${target} -> ${expected}`, () => {
      const result = twoSum(input, target);
      expect(result).toEqual(expected);
    });
  });
});

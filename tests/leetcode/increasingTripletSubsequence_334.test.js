import { increasingTriplet } from '../../src/leetcode/increasingTripletSubsequence_334.js';
import { arrToStr } from '../util.js';

describe('334. Increasing Triplet Subsequence', () => {
  [
    [[1, 2, 3, 4, 5], true],
    [[5, 4, 3, 2, 1], false],
    [[2, 1, 5, 0, 4, 6], true],
    [[10, 9, 5, 4, 3, 2, 6, 3, 2, 1, 7], true],
    [[9, 3, 20, 14, 9, 3], false],
    [[2, 3, 20, 14, 9, 3], true],
    [[1, 2, 2, 1], false],
    [[4, 5, 2147483647, 1, 2], true],
    [[1, 5, 0, 4, 1, 3], true],
    [[1, 2, 3], true],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = increasingTriplet(array);
      expect(result).toEqual(expected);
    });
  });
});

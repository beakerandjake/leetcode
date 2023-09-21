import { maxOperations } from '../../src/leetcode/maxNumberOfKSumPairs.js';
import { arrToStr } from '../util.js';

describe('1679. Max Number Of K-Sum Pairs', () => {
  [[[1, 2, 3, 4], 5, 2]].forEach(([array, k, expected]) => {
    test(`${arrToStr(array)},${k} -> ${expected}`, () => {
      const result = maxOperations(array, k);
      expect(result).toBe(expected);
    });
  });
});

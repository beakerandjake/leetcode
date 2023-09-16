import { hIndex } from '../../src/leetcode/hIndex_274.js';
import { arrToStr } from '../util.js';

describe('55. Jump Game', () => {
  [
    [[3, 0, 6, 1, 5], 3],
    [[1, 3, 1], 1],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = hIndex(array);
      expect(result).toEqual(expected);
    });
  });
});

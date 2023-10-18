import { getMinimumDifference } from '../../src/leetcode/530.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('530. Minimum Absolute Difference in BST', () => {
  [
    [[4, 2, 6, 1, 3], 1],
    [[1, 0, 48, null, null, 12, 49], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = getMinimumDifference(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});

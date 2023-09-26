import { pivotIndex } from '../../src/leetcode/724.js';
import { arrToStr } from '../util.js';

describe('724. Find Pivot Index', () => {
  [
    [[1, 7, 3, 6, 5, 6], 3],
    [[1, 2, 3], -1],
    [[2, 1, -1], 0],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = pivotIndex(input);
      expect(result).toBe(expected);
    });
  });
});

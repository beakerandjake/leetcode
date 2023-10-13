import { singleNumber } from '../../src/leetcode/137.js';
import { arrToStr } from '../util.js';

describe('137. Single Number II', () => {
  [
    [[2, 2, 3, 2], 3],
    [[0, 1, 0, 1, 0, 1, 99], 99],
    [[30000, 500, 100, 30000, 100, 30000, 100], 500],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = singleNumber(input);
      expect(result).toBe(expected);
    });
  });
});

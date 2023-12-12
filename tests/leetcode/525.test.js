import { findMaxLength } from '../../src/leetcode/525.js';
import { arrToStr } from '../util.js';

describe('525. Contiguous Array', () => {
  [
    [[0, 0, 0], 0],
    // [[0, 1, 0], 2],
    // [[0, 0, 1, 0, 0, 0, 1, 1], 6],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findMaxLength(input);
      expect(result).toBe(expected);
    });
  });
});

import { minimumTotal } from '../../src/leetcode/120.js';
import { arrToStr } from '../util.js';

describe('120. Triangle', () => {
  [
    [[[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]], 11],
    [[[-10]], -10],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = minimumTotal(input);
      expect(result).toBe(expected);
    });
  });
});

import { maxArea } from '../../src/leetcode/11.js';
import { arrToStr } from '../util.js';

describe('11. Container With Most Water', () => {
  [
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
    [[1, 2], 1],
    [[3, 1, 3, 4], 9],
    [[2, 3, 4, 5, 18, 17, 6], 17],
    [[1, 2, 1], 2],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxArea(input);
      expect(result).toEqual(expected);
    });
  });
});

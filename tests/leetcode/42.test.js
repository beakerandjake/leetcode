import { trap } from '../../src/leetcode/42.js';
import { arrToStr } from '../util.js';

describe('42. Trapping Rain Water', () => {
  [
    [[0, 1, 0], 0],
    [[0, 0, 0, 0], 0],
    [[1, 1, 1, 1], 0],
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[2, 0, 2], 2],
    [[1, 2, 3, 4], 0],
    [[4, 2, 3], 1],
    [[4, 1, 2, 1, 3], 5],
    [[3, 1, 1, 2], 2],
    [[5, 4, 1, 2], 1],
    [[5, 2, 2, 2, 2, 2], 0],
    [[1, 0, 1], 1],
    [[3, 1, 2, 0, 5, 0, 4, 1, 3], 12],
    [[7, 1, 1, 1, 3, 1, 4], 13],
  ].forEach(([heights, expected]) => {
    test(`${arrToStr(heights)} -> ${expected}`, () => {
      const result = trap(heights);
      expect(result).toBe(expected);
    });
  });
});

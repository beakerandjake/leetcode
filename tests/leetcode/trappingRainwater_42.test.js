import { trap } from '../../src/leetcode/trappingRainWater_42.js';
import { arrToStr } from '../util.js';

describe('42. Trapping Rain Water', () => {
  [
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[2, 0, 2], 2],
  ].forEach(([heights, expected]) => {
    test(`${arrToStr(heights)} -> ${expected}`, () => {
      const result = trap(heights);
      expect(result).toBe(expected);
    });
  });
});

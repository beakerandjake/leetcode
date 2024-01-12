import { minCostClimbingStairs } from '../src/leetcode/746.js';
import { arrToStr } from './util.js';

describe('746. Min Cost Climbing Stairs', () => {
  [
    [[10, 15, 20], 15],
    [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1], 6],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minCostClimbingStairs(input);
      expect(result).toEqual(expected);
    });
  });
});

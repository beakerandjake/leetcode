import { climbStairs } from '../../src/leetcode/climbingStairs_70.js';

describe('70. Climbing Stairs', () => {
  [
    [2, 2],
    [3, 3],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = climbStairs(input);
      expect(result).toBe(expected);
    });
  });
});

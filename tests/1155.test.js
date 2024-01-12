import { numRollsToTarget } from '../src/leetcode/1155.js';

describe('1155. Number of Dice Rolls With Target Sum', () => {
  [
    [1, 6, 3, 1],
    [2, 6, 7, 6],
    [30, 30, 500, 222616187],
  ].forEach(([n, k, target, expected]) => {
    test(`${n},${k},${target} -> ${expected}`, () => {
      const result = numRollsToTarget(n, k, target);
      expect(result).toBe(expected);
    });
  });
});

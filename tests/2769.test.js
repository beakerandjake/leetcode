import { theMaximumAchievableX } from '../src/2769.js';

describe('2769. Find the Maximum Achievable Number', () => {
  [
    [4, 1, 6],
    [3, 2, 7],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, () => {
      const result = theMaximumAchievableX(a, b);
      expect(result).toBe(expected);
    });
  });
});

import { isHappy } from '../src/leetcode/202.js';

describe('202. Happy Number', () => {
  [
    [19, true],
    [2, false],
    [50, false],
    [882, false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isHappy(input);
      expect(result).toBe(expected);
    });
  });
});

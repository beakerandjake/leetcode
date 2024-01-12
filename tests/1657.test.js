import { closeStrings } from '../src/leetcode/1657.js';

describe('1657. Determine if two strings are close', () => {
  [
    ['abc', 'bca', true],
    ['a', 'aa', false],
    ['cabbba', 'abbccc', true],
    ['uau', 'ssx', false],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, () => {
      const result = closeStrings(a, b);
      expect(result).toBe(expected);
    });
  });
});

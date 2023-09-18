import { romanToInt } from '../../src/leetcode/romanToInteger_13.js';

describe('13. Roman to Integer', () => {
  [
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
  ].forEach(([roman, expected]) => {
    test(`${roman} -> ${expected}`, () => {
      const result = romanToInt(roman);
      expect(result).toBe(expected);
    });
  });
});

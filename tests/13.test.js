import { romanToInt } from '../src/13.js';

describe('13. Roman to Integer', () => {
  [
    ['III', 3],
    ['LVIII', 58],
    ['MCMXCIV', 1994],
    ['XL', 40],
    ['L', 50],
    ['MI', 1001],
  ].forEach(([roman, expected]) => {
    test(`${roman} -> ${expected}`, () => {
      const result = romanToInt(roman);
      expect(result).toBe(expected);
    });
  });
});

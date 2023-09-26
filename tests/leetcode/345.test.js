import { reverseVowels } from '../../src/leetcode/345.js';

describe('345. Reverse Vowels of a String', () => {
  [
    ['hello', 'holle'],
    ['leetcode', 'leotcede'],
    ['wry', 'wry'],
    ['WRY', 'WRY'],
    ['beLLE', 'bELLe'],
  ].forEach(([str, expected]) => {
    test(`${str} -> ${expected}`, () => {
      const result = reverseVowels(str);
      expect(result).toBe(expected);
    });
  });
});

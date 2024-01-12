import { mergeAlternately } from '../src/leetcode/1768.js';

describe('1768. Merge Strings Alternately', () => {
  [
    ['abc', 'pqr', 'apbqcr'],
    ['ab', 'pqrs', 'apbqrs'],
    ['abcd', 'pq', 'apbqcd'],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b}->${expected}`, () => {
      const result = mergeAlternately(a, b);
      expect(result).toBe(expected);
    });
  });
});

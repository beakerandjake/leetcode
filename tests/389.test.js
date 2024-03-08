import { findTheDifference } from '../src/389.js';

describe('389. Find the Difference', () => {
  [
    ['abcd', 'abcde', 'e'],
    ['', 'y', 'y'],
  ].forEach(([s, t, expected]) => {
    test(`${s},${t} -> ${expected}`, () => {
      const result = findTheDifference(s, t);
      expect(result).toBe(expected);
    });
  });
});

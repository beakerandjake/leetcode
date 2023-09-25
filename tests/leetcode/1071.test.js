import { gcdOfStrings } from '../../src/leetcode/1071.js';

describe('1071. Greatest Common Divisor of Strings', () => {
  [
    ['ABCABC', 'ABC', 'ABC'],
    ['ABABAB', 'ABAB', 'AB'],
    ['LEET', 'CODE', ''],
    ['booboo', 'boo', 'boo'],
    ['COOLGUY', 'COOLGUYS', ''],
    ['CAT', 'CAT', 'CAT'],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b}->${expected}`, () => {
      const result = gcdOfStrings(a, b);
      expect(result).toBe(expected);
    });
  });
});

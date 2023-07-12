import { palindromePermutation } from '../../../src/interview/ch01/palindromePermutation.js';

describe('palindromePermutation()', () => {
  test.each([
    ['a', true],
    ['aa', true],
    ['vee', true],
    ['rdraa', true],
    ['tatroor', true],
    ['rotator', true],
    ['tacocat', true],
    ['ccoatta', true],
    ['xyyyzzz', false],
    ['azq', false],
    ['zzqb', false],
    ['perfectly', false],
  ])('palindromePermutation(%s) = %s', (str, expected) => {
    const result = palindromePermutation(str);
    expect(result).toBe(expected);
  });
});

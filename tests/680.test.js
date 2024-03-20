import { validPalindrome } from '../src/680.js';
import { arrToStr } from './util.js';

describe('680. Valid Palindrome II', () => {
  [
    ['aba', true],
    ['abca', true],
    ['abc', false],
    ['eeccccbebaeeabebccceea', false],
    [
      'aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga',
      true,
    ],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = validPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});

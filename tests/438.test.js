import { findAnagrams } from '../src/438.js';
import { generateTestName } from './util.js';

describe('438. Find All Anagrams in a String', () => {
  [
    ['cbaebabacd', 'abc', [0, 6]],
    ['abab', 'ab', [0, 1, 2]],
  ].forEach((args) => {
    const [s, p, expected] = args;
    test(generateTestName(findAnagrams, ...args), () => {
      const result = findAnagrams(s, p);
      expect(result).toEqual(expected);
    });
  });
});

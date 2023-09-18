import { longestCommonPrefix } from '../../src/leetcode/longestCommonPrefix_14.js';
import { arrToStr } from '../util.js';

describe('14. Longest Common Prefix', () => {
  [
    [['flower', 'flow', 'flight'], 'fl'],
    [['dog', 'racecar', 'car'], ''],
    [['cat', 'cats', 'catty', 'catnip'], 'cat'],
  ].forEach(([words, expected]) => {
    test(`${arrToStr(words)} -> ${expected}`, () => {
      const result = longestCommonPrefix(words);
      expect(result).toBe(expected);
    });
  });
});

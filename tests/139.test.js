import { wordBreak } from '../src/leetcode/139.js';
import { arrToStr } from './util.js';

describe('139. Word Break', () => {
  [
    ['coolguy', ['cool', 'guy'], true],
    ['applepenapple', ['apple', 'pen'], true],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], false],
    ['a', ['a'], true],
  ].forEach(([string, dict, expected]) => {
    test(`${string},${arrToStr(dict)} -> ${expected}`, () => {
      const result = wordBreak(string, dict);
      expect(result).toBe(expected);
    });
  });
});

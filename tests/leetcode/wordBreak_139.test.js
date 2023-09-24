import { wordBreak } from '../../src/leetcode/wordBreak_139.js';
import { arrToStr } from '../util.js';

describe('139. Word Break', () => {
  [
    ['leetcode', ['leet', 'code'], true],
    ['applepenapple', ['apple', 'pen'], true],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], false],
  ].forEach(([string, dict, expected]) => {
    test(`${string},${arrToStr(dict)} -> ${expected}`, () => {
      const result = wordBreak(string, dict);
      expect(result).toBe(expected);
    });
  });
});

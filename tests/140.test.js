import { wordBreak } from '../src/140.js';
import { generateTestName } from './util.js';

describe('140. Word Break II', () => {
  [
    [
      'catsanddog',
      ['cat', 'cats', 'and', 'sand', 'dog'],
      ['cats and dog', 'cat sand dog'],
    ],
    [
      'pineapplepenapple',
      ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
      ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'],
    ],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], []],
  ].forEach((args) => {
    const [s, wordDict, expected] = args;
    test(generateTestName(wordBreak, ...args), () => {
      const result = wordBreak(s, wordDict);
      expect(result).toEqual(expected);
    });
  });
});

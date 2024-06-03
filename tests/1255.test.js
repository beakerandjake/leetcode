import { maxScoreWords } from '../src/1255.js';
import { generateTestName } from './util.js';

describe('1255. Maximum Score Words Formed by Letters', () => {
  [
    [
      ['dog', 'cat', 'dad', 'good'],
      ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
      [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      23,
    ],
    [
      ['xxxz', 'ax', 'bx', 'cx'],
      ['z', 'a', 'b', 'c', 'x', 'x', 'x'],
      [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10],
      27,
    ],
    [
      ['leetcode'],
      ['l', 'e', 't', 'c', 'o', 'd'],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      0,
    ],
  ].forEach((args) => {
    const [words, letters, score, expected] = args;
    test(generateTestName(maxScoreWords, ...args), () => {
      const result = maxScoreWords(words, letters, score);
      expect(result).toBe(expected);
    });
  });
});

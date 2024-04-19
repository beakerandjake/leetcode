import { findWords } from '../src/212.js';
import { generateTestName } from './util.js';

describe('212. Word Search II', () => {
  [
    [
      [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
      ],
      ['oath', 'pea', 'eat', 'rain'],
      ['eat', 'oath'],
    ],
    [
      [
        ['a', 'b'],
        ['c', 'd'],
      ],
      ['abcb'],
      [],
    ],
  ].forEach((args) => {
    const [board, words, expected] = args;
    test(generateTestName(findWords, ...args), () => {
      const result = findWords(board, words);
      expect(result).toIncludeSameMembers(expected);
    });
  });
});

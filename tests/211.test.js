import { WordDictionary } from '../src/211.js';
import { generateTestName } from './util.js';

describe('211. Design Add and Search Words Data Structure', () => {
  [
    [['bad', 'dad', 'mad'], 'pad', false],
    [['bad', 'dad', 'mad'], 'dad', true],
    [['bad', 'dad', 'mad'], '.ad', true],
    [['bad', 'dad', 'mad'], 'b..', true],
  ].forEach((args) => {
    const [words, query, expected] = args;
    const dictionary = words.reduce((acc, x) => {
      acc.addWord(x);
      return acc;
    }, new WordDictionary());
    test(generateTestName(dictionary.search, ...args), () => {
      const result = dictionary.search(query);
      expect(result).toBe(expected);
    });
  });
});

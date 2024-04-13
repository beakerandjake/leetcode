import { WordDictionary } from '../src/211.js';
import { generateTestName } from './util.js';

describe('211. Design Add and Search Words Data Structure', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(WordDictionary, ...args), () => {
      const result = WordDictionary();
      expect(result).toBe(expected);
    });
  });
});

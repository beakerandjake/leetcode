import { countCharacters } from '../src/1160.js';
import { generateTestName } from './util.js';

describe('1160. Find Words That Can Be Formed by Characters', () => {
  [
    [['cat', 'bt', 'hat', 'tree'], 'atach', 6],
    [['hello', 'world', 'leetcode'], 'welldonehoneyr', 10],
  ].forEach((args) => {
    const [words, chars, expected] = args;
    test(generateTestName(countCharacters, ...args), () => {
      const result = countCharacters(words, chars);
      expect(result).toBe(expected);
    });
  });
});

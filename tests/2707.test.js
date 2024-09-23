import { minExtraChar } from '../src/2707.js';
import { generateTestName } from './util.js';

describe('2707. Extra Characters in a String', () => {
  [
    ['leetscode', ['leet', 'code', 'leetcode'], 1],
    ['sayhelloworld', ['hello', 'world'], 3],
  ].forEach((args) => {
    const [s, dictionary, expected] = args;
    test(generateTestName(minExtraChar, ...args), () => {
      const result = minExtraChar(s, dictionary);
      expect(result).toBe(expected);
    });
  });
});

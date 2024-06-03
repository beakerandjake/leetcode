import { appendCharacters } from '../src/2486.js';
import { generateTestName } from './util.js';

describe('2486. Append Characters to String to Make Subsequence', () => {
  [
    ['coaching', 'coding', 4],
    ['abcde', 'a', 0],
    ['z', 'abcde', 5],
  ].forEach((args) => {
    const [s, t, expected] = args;
    test(generateTestName(appendCharacters, ...args), () => {
      const result = appendCharacters(s, t);
      expect(result).toBe(expected);
    });
  });
});

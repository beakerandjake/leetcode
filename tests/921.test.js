import { minAddToMakeValid } from '../src/921.js';
import { generateTestName } from './util.js';

describe('921. Minimum Add to Make Parentheses Valid', () => {
  [
    ['())', 1],
    ['(((', 3],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(minAddToMakeValid, ...args), () => {
      const result = minAddToMakeValid(s);
      expect(result).toBe(expected);
    });
  });
});

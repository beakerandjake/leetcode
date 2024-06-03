import { equalSubstring } from '../src/1208.js';
import { generateTestName } from './util.js';

describe('1208. Get Equal Substrings Within Budget', () => {
  [
    ['abcd', 'bcdf', 3, 3],
    ['abcd', 'cdef', 3, 1],
    ['abcd', 'acde', 0, 1],
  ].forEach((args) => {
    const [s, t, maxCost, expected] = args;
    test(generateTestName(equalSubstring, ...args), () => {
      const result = equalSubstring(s, t, maxCost);
      expect(result).toBe(expected);
    });
  });
});

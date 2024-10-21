import { maxUniqueSplit } from '../src/1593.js';
import { generateTestName } from './util.js';

describe('1593. Split a String Into the Max Number of Unique Substrings', () => {
  [
    ['ababccc', 5],
    ['aba', 2],
    ['aa', 1],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(maxUniqueSplit, ...args), () => {
      const result = maxUniqueSplit(s);
      expect(result).toBe(expected);
    });
  });
});

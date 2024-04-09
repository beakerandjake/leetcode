import { trailingZeroes } from '../src/172.js';
import { generateTestName } from './util.js';

describe('172. Factorial Trailing Zeroes', () => {
  [
    [3, 0],
    [5, 1],
    [0, 0],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(trailingZeroes, ...args), () => {
      const result = trailingZeroes(n);
      expect(result).toBe(expected);
    });
  });
});

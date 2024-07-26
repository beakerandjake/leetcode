import { findTheWinner } from '../src/1823.js';
import { generateTestName } from './util.js';

describe('1823. Find the Winner of the Circular Game', () => {
  [
    [5, 2, 3],
    [6, 5, 1],
  ].forEach((args) => {
    const [n, k, expected] = args;
    test(generateTestName(findTheWinner, ...args), () => {
      const result = findTheWinner(n, k);
      expect(result).toBe(expected);
    });
  });
});

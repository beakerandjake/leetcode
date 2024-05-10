import { kthSmallestPrimeFraction } from '../src/786.js';
import { generateTestName } from './util.js';

describe('786. K-th Smallest Prime Fraction', () => {
  [
    [[1, 2, 3, 5], 3, [2, 5]],
    [[1, 7], 1, [1, 7]],
  ].forEach((args) => {
    const [arr, k, expected] = args;
    test(generateTestName(kthSmallestPrimeFraction, ...args), () => {
      const result = kthSmallestPrimeFraction(arr, k);
      expect(result).toEqual(expected);
    });
  });
});

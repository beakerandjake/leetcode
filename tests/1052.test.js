import { maxSatisfied } from '../src/1052.js';
import { generateTestName } from './util.js';

describe('1052. Grumpy Bookstore Owner', () => {
  [
    [[1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3, 16],
    [[1], [0], 1, 1],
  ].forEach((args) => {
    const [customers, grumpy, minutes, expected] = args;
    test(generateTestName(maxSatisfied, ...args), () => {
      const result = maxSatisfied(customers, grumpy, minutes);
      expect(result).toBe(expected);
    });
  });
});

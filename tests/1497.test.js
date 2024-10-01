import { canArrange } from '../src/1497.js';
import { generateTestName } from './util.js';

describe('1497. Check If Array Pairs Are Divisible by k', () => {
  [
    [[1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5, true],
    [[1, 2, 3, 4, 5, 6], 7, true],
    [[1, 2, 3, 4, 5, 6], 10, false],
    [[-1, -1, -1, -1, 2, 2, -2, -2], 3, false],
    [[-10, 10], 2, true],
    [[75, 5, -5, 75, -2, -3, 88, 10, 10, 87], 85, true],
  ].forEach((args) => {
    const [arr, k, expected] = args;
    test(generateTestName(canArrange, ...args), () => {
      const result = canArrange(arr, k);
      expect(result).toBe(expected);
    });
  });
});

import { maxDistance } from '../src/1552.js';
import { generateTestName } from './util.js';

describe('1552. Magnetic Force Between Two Balls', () => {
  [
    [[1, 2, 3, 4, 7], 3, 3],
    [[5, 4, 3, 2, 1, 1000000000], 2, 999999999],
  ].forEach((args) => {
    const [position, m, expected] = args;
    test(generateTestName(maxDistance, ...args), () => {
      const result = maxDistance(position, m);
      expect(result).toBe(expected);
    });
  });
});

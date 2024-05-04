import { numRescueBoats } from '../src/881.js';
import { generateTestName } from './util.js';

describe('881. Boats to Save People', () => {
  [
    [[1, 2], 3, 1],
    [[3, 2, 2, 1], 3, 3],
    [[3, 5, 3, 4], 5, 4],
    [[5, 1, 4, 2], 6, 2],
  ].forEach((args) => {
    const [people, limit, expected] = args;
    test(generateTestName(numRescueBoats, ...args), () => {
      const result = numRescueBoats(people, limit);
      expect(result).toBe(expected);
    });
  });
});

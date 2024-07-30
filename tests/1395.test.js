import { numTeams } from '../src/1395.js';
import { generateTestName } from './util.js';

describe('1395. Count Number of Teams', () => {
  [
    [[2, 5, 3, 4, 1], 3],
    [[2, 1, 3], 0],
    [[1, 2, 3, 4], 4],
  ].forEach((args) => {
    const [rating, expected] = args;
    test(generateTestName(numTeams, ...args), () => {
      const result = numTeams(rating);
      expect(result).toBe(expected);
    });
  });
});

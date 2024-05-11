import { mincostToHireWorkers } from '../src/857.js';
import { generateTestName } from './util.js';

describe('857. Minimum Cost to Hire K Workers', () => {
  [
    [[10, 20, 5], [70, 50, 30], 2, 105],
    [[3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3, 30.66667],
  ].forEach((args) => {
    const [quality, wage, k, expected] = args;
    test(generateTestName(mincostToHireWorkers, ...args), () => {
      const result = mincostToHireWorkers(quality, wage, k);
      expect(result).toBeCloseTo(expected);
    });
  });
});

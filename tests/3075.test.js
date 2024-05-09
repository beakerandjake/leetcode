import { maximumHappinessSum } from '../src/3075.js';
import { generateTestName } from './util.js';

describe('3075. Maximize Happiness of Selected Children', () => {
  [
    [[1, 2, 3], 2, 4],
    [[1, 1, 1, 1], 2, 1],
    [[2, 3, 4, 5], 1, 5],
  ].forEach((args) => {
    const [happiness, k, expected] = args;
    test(generateTestName(maximumHappinessSum, ...args), () => {
      const result = maximumHappinessSum(happiness, k);
      expect(result).toBe(expected);
    });
  });
});

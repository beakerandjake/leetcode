import { maxProfitAssignment } from '../src/826.js';
import { generateTestName } from './util.js';

describe('826. Most Profit Assigning Work', () => {
  [
    [[2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7], 100],
    [[85, 47, 57], [24, 66, 99], [40, 25, 25], 0],
    [
      [68, 35, 52, 47, 86],
      [67, 17, 1, 81, 3],
      [92, 10, 85, 84, 82],
      324
    ],
  ].forEach((args) => {
    const [difficulty, profit, worker, expected] = args;
    test(generateTestName(maxProfitAssignment, ...args), () => {
      const result = maxProfitAssignment(difficulty, profit, worker);
      expect(result).toBe(expected);
    });
  });
});

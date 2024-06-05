import { maximumValueSum } from '../src/3068.js';
import { generateTestName } from './util.js';

describe('3068. Find the Maximum Sum of Node Values', () => {
  [
    [
      [1, 2, 1],
      3,
      [
        [0, 1],
        [0, 2],
      ],
      6,
    ],
    [[2, 3], 7, [[0, 1]], 9],
    [
      [7, 7, 7, 7, 7, 7],
      3,
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
      ],
      42,
    ],
  ].forEach((args) => {
    const [nums, k, edges, expected] = args;
    test(generateTestName(maximumValueSum, ...args), () => {
      const result = maximumValueSum(nums, k, edges);
      expect(result).toBe(expected);
    });
  });
});

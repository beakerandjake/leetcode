import { minimumAbsDifference } from '../src/1200.js';
import { generateTestName } from './util.js';

describe('1200. Minimum Absolute Difference', () => {
  [
    [
      [4, 2, 1, 3],
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
    ],
    [[1, 3, 6, 10, 15], [[1, 3]]],
    [
      [3, 8, -10, 23, 19, -4, -14, 27],
      [
        [-14, -10],
        [19, 23],
        [23, 27],
      ],
    ],
  ].forEach((args) => {
    const [arr, expected] = args;
    test(generateTestName(minimumAbsDifference, ...args), () => {
      const result = minimumAbsDifference(arr);
      expect(result).toEqual(expected);
    });
  });
});

import { arrayRankTransform } from '../src/1331.js';
import { generateTestName } from './util.js';

describe('1331. Rank Transform of an Array', () => {
  [
    [
      [40, 10, 20, 30],
      [4, 1, 2, 3],
    ],
    [
      [100, 100, 100],
      [1, 1, 1],
    ],
    [
      [37, 12, 28, 9, 100, 56, 80, 5, 12],
      [5, 3, 4, 2, 8, 6, 7, 1, 3],
    ],
  ].forEach((args) => {
    const [arr, expected] = args;
    test(generateTestName(arrayRankTransform, ...args), () => {
      const result = arrayRankTransform(arr);
      expect(result).toEqual(expected);
    });
  });
});

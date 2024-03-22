import { runningSum } from '../src/1480.js';
import { generateTestName } from './util.js';

describe('1480. Running Sum of 1d Array', () => {
  [
    [
      [1, 2, 3, 4],
      [1, 3, 6, 10],
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 2, 3, 4, 5],
    ],
    [
      [3, 1, 2, 10, 1],
      [3, 4, 6, 16, 17],
    ],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(runningSum, ...args), () => {
      const result = runningSum(input);
      expect(result).toEqual(expected);
    });
  });
});

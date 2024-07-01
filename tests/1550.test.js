import { threeConsecutiveOdds } from '../src/1550.js';
import { generateTestName } from './util.js';

describe('1550. Three Consecutive Odds', () => {
  [
    [[2, 6, 4, 1], false],
    [[1, 2, 34, 3, 4, 5, 7, 23, 12], true],
    [[1, 2, 1, 1], false],
  ].forEach((args) => {
    const [arr, expected] = args;
    test(generateTestName(threeConsecutiveOdds, ...args), () => {
      const result = threeConsecutiveOdds(arr);
      expect(result).toBe(expected);
    });
  });
});

import { maxSubArray } from '../src/53.js';
import { arrToStr } from './util.js';

describe('53. Maximum Subarray', () => {
  [
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[1], 1],
    [[5, 4, -1, 7, 8], 23],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxSubArray(input);
      expect(result).toBe(expected);
    });
  });
});

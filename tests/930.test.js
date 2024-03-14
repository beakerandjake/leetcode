import { numSubarraysWithSum } from '../src/930.js';
import { arrToStr } from './util.js';

describe('930. Binary Subarrays With Sum', () => {
  [
    [[1, 0, 1, 0, 1], 2, 4],
    [[0, 0, 0, 0, 0], 0, 15],
  ].forEach(([input, goal, expected]) => {
    test(`${arrToStr(input)},${goal} -> ${expected}`, () => {
      const result = numSubarraysWithSum(input, goal);
      expect(result).toBe(expected);
    });
  });
});

import { maxSlidingWindow } from '../src/239.js';
import { generateTestName } from './util.js';

describe('239. Sliding Window Maximum', () => {
  [
    [[1, 3, -1, -3, 5, 3, 6, 7], 3, [3, 3, 5, 5, 6, 7]],
    [[1], 1, [1]],
    [[1, -1], 1, [1, -1]],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(maxSlidingWindow, ...args), () => {
      const result = maxSlidingWindow(nums, k);
      expect(result).toEqual(expected);
    });
  });
});

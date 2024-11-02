import { maxWidthRamp } from '../src/962.js';
import { generateTestName } from './util.js';

describe('962. Maximum Width Ramp', () => {
  [
    [[6, 0, 8, 2, 1, 5], 4],
    [[9, 8, 1, 0, 1, 9, 4, 0, 4, 1], 7],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(maxWidthRamp, ...args), () => {
      const result = maxWidthRamp(nums);
      expect(result).toBe(expected);
    });
  });
});

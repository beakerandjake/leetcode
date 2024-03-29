import { countSubarrays } from '../src/2962.js';
import { generateTestName } from './util.js';

describe('2962. Count Subarrays Where Max Element Appears at Least K Times', () => {
  [
    [[1, 3, 2, 3, 3], 2, 6],
    [[1, 4, 2, 1], 3, 0],
    [
      [
        61, 23, 38, 23, 56, 40, 82, 56, 82, 82, 82, 70, 8, 69, 8, 7, 19, 14, 58, 42, 82,
        10, 82, 78, 15, 82,
      ],
      2,
      224,
    ],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(countSubarrays, ...args), () => {
      const result = countSubarrays(nums, k);
      expect(result).toBe(expected);
    });
  });
});

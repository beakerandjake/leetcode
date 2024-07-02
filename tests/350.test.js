import { intersect } from '../src/350.js';
import { generateTestName } from './util.js';

describe('350. Intersection of Two Arrays II', () => {
  [
    [
      [1, 2, 2, 1],
      [2, 2],
      [2, 2],
    ],
    [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
      [4, 9],
    ],
  ].forEach((args) => {
    const [nums1, nums2, expected] = args;
    test(generateTestName(intersect, ...args), () => {
      const result = intersect(nums1, nums2);
      expect(result).toEqual(expected);
    });
  });
});

import { SparseVector } from '../src/1570.js';
import { generateTestName } from './util.js';

describe('1570. Dot Product of Two Sparse Vectors', () => {
  [
    [[1, 0, 0, 2, 3], [0, 3, 0, 4, 0], 8],
    [[0, 1, 0, 0, 0], [0, 0, 0, 0, 2], 0],
    [[0, 1, 0, 0, 2, 0, 0], [1, 0, 0, 0, 3, 0, 4], 6],
  ].forEach((args) => {
    const [nums1, nums2, expected] = args;
    test(generateTestName(SparseVector, ...args), () => {
      const a = new SparseVector(nums1);
      const b = new SparseVector(nums2);
      const result = a.dotProduct(b);
      expect(result).toBe(expected);
    });
  });
});

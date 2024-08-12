import { KthLargest } from '../src/703.js';
import { generateTestName } from './util.js';

describe('703. Kth Largest Element in a Stream', () => {
  [
    [3, [4, 5, 8, 2], 3, 4],
    [3, [4, 5, 8], 5, 5],
    [3, [4, 5, 5], 10, 5],
    [3, [5, 8, 10], 9, 8],
    [3, [8, 9, 10], 4, 8],
  ].forEach((args) => {
    const [k, nums, value, expected] = args;
    test(generateTestName(KthLargest, ...args), () => {
      const kth = new KthLargest(k, nums);
      const result = kth.add(value);
      expect(result).toBe(expected);
    });
  });
});

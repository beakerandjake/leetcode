import { MedianFinder } from '../src/295.js';
import { generateTestName } from './util.js';

describe('295. Find Median from Data Stream', () => {
  [
    [[1, 2], 1.5],
    [[1, 2, 3], 2],
    [[6, 10, 2], 6],
  ].forEach((args) => {
    const [nums, expected] = args;
    const medianFinder = nums.reduce((acc, num) => {
      acc.addNum(num);
      return acc;
    }, new MedianFinder());
    test(generateTestName(medianFinder.findMedian, ...args), () => {
      const result = medianFinder.findMedian();
      expect(result).toBe(expected);
    });
  });
});

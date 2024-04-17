import { topKFrequent } from '../src/347.js';
import { generateTestName } from './util.js';

describe('347. Top K Frequent Elements', () => {
  [
    [[1, 1, 1, 2, 2, 3], 2, [1, 2]],
    [[1], 1, [1]],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(topKFrequent, ...args), () => {
      const result = topKFrequent(nums, k);
      expect(result).toEqual(expected);
    });
  });
});

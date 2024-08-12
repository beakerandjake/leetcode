import { KthLargest } from '../src/703.js';
import { generateTestName } from './util.js';

describe('703. Kth Largest Element in a Stream', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(KthLargest, ...args), () => {
      const result = KthLargest();
      expect(result).toBe(expected);
    });
  });
});

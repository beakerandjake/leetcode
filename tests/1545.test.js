import { findKthBit } from '../src/1545.js';
import { generateTestName } from './util.js';

describe('1545. Find Kth Bit in Nth Binary String', () => {
  [
    [3, 1, '0'],
    [4, 11, '1'],
  ].forEach((args) => {
    const [n, k, expected] = args;
    test(generateTestName(findKthBit, ...args), () => {
      const result = findKthBit(n, k);
      expect(result).toBe(expected);
    });
  });
});

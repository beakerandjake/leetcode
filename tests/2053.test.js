import { kthDistinct } from '../src/2053.js';
import { generateTestName } from './util.js';

describe('2053. Kth Distinct String in an Array', () => {
  [
    [['d', 'b', 'c', 'b', 'c', 'a'], 2, 'a'],
    [['aaa', 'aa', 'a'], 1, 'aaa'],
    [['a', 'b', 'a'], 3, ''],
  ].forEach((args) => {
    const [arr, k, expected] = args;
    test(generateTestName(kthDistinct, ...args), () => {
      const result = kthDistinct(arr, k);
      expect(result).toBe(expected);
    });
  });
});

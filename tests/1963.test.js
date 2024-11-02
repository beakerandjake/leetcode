import { minSwaps } from '../src/1963.js';
import { generateTestName } from './util.js';

describe('1963. Minimum Number of Swaps to Make the String Balanced', () => {
  [
    ['][][', 1],
    [']]][[[', 2],
    ['[]', 0],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(minSwaps, ...args), () => {
      const result = minSwaps(s);
      expect(result).toBe(expected);
    });
  });
});

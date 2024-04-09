import { hammingDistance } from '../src/461.js';
import { generateTestName } from './util.js';

describe('461. Hamming Distance', () => {
  [
    [1, 4, 2],
    [3, 1, 1],
  ].forEach((args) => {
    const [x, y, expected] = args;
    test(generateTestName(hammingDistance, ...args), () => {
      const result = hammingDistance(x, y);
      expect(result).toBe(expected);
    });
  });
});

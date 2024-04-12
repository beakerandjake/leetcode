import { MedianFinder } from '../src/295.js';
import { generateTestName } from './util.js';

describe('295. Find Median from Data Stream', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(MedianFinder, ...args), () => {
      const result = MedianFinder();
      expect(result).toBe(expected);
    });
  });
});

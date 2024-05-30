import { countTriplets } from '../src/1442.js';
import { generateTestName } from './util.js';

describe('1442. Count Triplets That Can Form Two Arrays of Equal XOR', () => {
  [
    [[2, 3, 1, 6, 7], 4],
    [[1, 1, 1, 1, 1], 10],
  ].forEach((args) => {
    const [arr, expected] = args;
    test(generateTestName(countTriplets, ...args), () => {
      const result = countTriplets(arr);
      expect(result).toBe(expected);
    });
  });
});
